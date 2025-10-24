const jwt = require('jsonwebtoken');
const User = require('../models/User');

// ✅ LOGIN CONTROLLER
// ✅ LOGIN CONTROLLER (Fixed)
exports.login = async (req, res) => {
  try {
    const { membershipNumber, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ membershipNumber });
    if (!user) {
      return res.status(404).json({ message: 'Member not found' });
    }

    // ✅ Handle users without hashed passwords (manually added)
    let isMatch = false;
    if (user.comparePassword) {
      // Normal hashed password check
      isMatch = await user.comparePassword(password);
    } else {
      // Manual fallback (plaintext match)
      isMatch = user.password === password;
    }

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'mysecretkey',
      { expiresIn: '1d' }
    );

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // ✅ Use safe data format
    const safeUser = user.publicProfile ? user.publicProfile() : {
      _id: user._id,
      fullName: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
      membershipNumber: user.membershipNumber,
      email: user.email,
      role: user.role,
      membershipStatus: user.membershipStatus,
      totalSavings: user.totalSavings || 0,
      totalLoanBalance: user.totalLoanBalance || 0,
      savingsProducts: user.savingsProducts || [],
      loanProducts: user.loanProducts || [],
      lastLogin: user.lastLogin,
    };

    res.json({
      message: 'Login successful',
      token,
      member: safeUser,
    });
  } catch (error) {
  console.error('💥 Login error details:', error);
  res.status(500).json({ 
    message: 'Server error during login', 
    error: error.message, 
    stack: error.stack 
  });

};

