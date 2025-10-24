// routes/auth.js
const express = require("express");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const auth = require("../middleware/auth");

const router = express.Router();

/**
 * REGISTER MEMBER
 */
router.post(
  "/register",
  [
    body("membershipNumber").trim().notEmpty().withMessage("Membership number is required"),
    body("fullName").trim().notEmpty().withMessage("Full name is required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { membershipNumber, firstName, lastName, password } = req.body;


      // Check if member exists
      const existingUser = await User.findOne({ membershipNumber });
      if (existingUser) {
        return res.status(400).json({ message: "Member already exists" });
      }

      // Create new member
      const user = new User({ membershipNumber, firstName, lastName, password });
      await user.save();

      // Generate JWT
      const token = jwt.sign(
        { userId: user._id, membershipNumber: user.membershipNumber },
        process.env.JWT_SECRET || "mysecretkey",
        { expiresIn: "7d" }
      );

      res.status(201).json({
        message: "Member registered successfully",
        token,
        member: user.publicProfile(),
      });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ message: "Server error during registration" });
    }
  }
);

/**
 * LOGIN ROUTE
 */
router.post(
  "/login",
  [
    body("membershipNumber").trim().notEmpty().withMessage("Membership number is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { membershipNumber, password } = req.body;

      // Find member
      const user = await User.findOne({ membershipNumber });
      if (!user) {
        return res.status(401).json({ message: "Invalid membership number" });
      }

      // Compare password using bcrypt
      const isMatch = password === user.password;
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid password" });
      }

      // Update last login
      user.lastLogin = new Date();
      await user.save();

      // Generate JWT
      const token = jwt.sign(
        { userId: user._id, membershipNumber: user.membershipNumber },
        process.env.JWT_SECRET || "mysecretkey",
        { expiresIn: "7d" }
      );

      // ✅ Use clean public profile
      res.json({
      message: "Login successful",
      token,
      member: user.publicProfile(),
      role: user.role,
      isAdmin: user.role === "admin"
  });

    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Server error during login" });
    }
  }
);

/**
 * GET CURRENT USER PROFILE (Protected)
 */
router.get("/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user.publicProfile());
  } catch (error) {
    console.error("Profile fetch error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * UPDATE PROFILE (Optional)
 */
router.put(
  "/profile",
  auth,
  [
    body("fullName").optional().trim().notEmpty(),
    body("savingsProducts").optional().isArray(),
    body("loanProducts").optional().isArray(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const updates = req.body;
      delete updates.password;
      delete updates.membershipNumber;

      const user = await User.findByIdAndUpdate(req.user.userId, updates, {
        new: true,
        runValidators: true,
      });

      res.json({ message: "Profile updated successfully", member: user.publicProfile() });
    } catch (error) {
      console.error("Profile update error:", error);
      res.status(500).json({ message: "Server error during profile update" });
    }
  }
);

module.exports = router;

