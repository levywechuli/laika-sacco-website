// routes/auth.js
const express = require("express");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const auth = require("../middleware/auth");
const router = express.Router();

/**
 * REGISTER MEMBER
 * You can use this when creating accounts for new members.
 * If you’re issuing membership numbers manually, you can skip this and seed them directly in MongoDB.
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

      const { membershipNumber, fullName, password } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ membershipNumber });
      if (existingUser) {
        return res.status(400).json({ message: "Member already exists" });
      }

      // Create new member
      const user = new User({ membershipNumber, fullName, password });
      await user.save();

      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id, membershipNumber: user.membershipNumber },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      res.status(201).json({
        message: "Member registered successfully",
        token,
        user: {
          id: user._id,
          membershipNumber: user.membershipNumber,
          fullName: user.fullName,
        },
      });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ message: "Server error during registration" });
    }
  }
);

/**
 * LOGIN ROUTE
 * Login with membership number + password
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

      // Find user by membership number
      const user = await User.findOne({ membershipNumber });
      if (!user) {
        return res.status(401).json({ message: "Invalid membership number" });
      }

      // Check password
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
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      // Send dashboard data
      res.json({
        message: "Login successful",
        token,
        user: {
          id: user._id,
          fullName: user.fullName,
          membershipNumber: user.membershipNumber,
          savingsProducts: user.savingsProducts,
          loanProducts: user.loanProducts,
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Server error during login" });
    }
  }
);

/**
 * GET CURRENT USER PROFILE
 * Uses JWT token (authorization header)
 */
router.get("/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    res.json(user);
  } catch (error) {
    console.error("Profile fetch error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * UPDATE PROFILE (Optional)
 * Allows changing full name or adding savings/loan data
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
      }).select("-password");

      res.json({ message: "Profile updated successfully", user });
    } catch (error) {
      console.error("Profile update error:", error);
      res.status(500).json({ message: "Server error during profile update" });
    }
  }
);

module.exports = router;
