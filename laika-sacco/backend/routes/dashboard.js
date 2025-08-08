const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/User');
const MembershipApplication = require('../models/MembershipApplication');
const LoanApplication = require('../models/LoanApplication');

const router = express.Router();

// Get dashboard statistics (admin only)
router.get('/stats', auth, async (req, res) => {
  try {
    // Basic stats - in production, add proper admin authorization
    const totalMembers = await User.countDocuments({ membershipStatus: 'active' });
    const pendingApplications = await MembershipApplication.countDocuments({ status: 'pending' });
    const pendingLoans = await LoanApplication.countDocuments({ status: 'pending' });
    const totalLoanAmount = await LoanApplication.aggregate([
      { $match: { status: 'approved' } },
      { $group: { _id: null, total: { $sum: '$approvedAmount' } } }
    ]);

    res.json({
      totalMembers,
      pendingApplications,
      pendingLoans,
      totalLoanAmount: totalLoanAmount[0]?.total || 0,
      lastUpdated: new Date()
    });
  } catch (error) {
    console.error('Dashboard stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get recent applications
router.get('/recent-applications', auth, async (req, res) => {
  try {
    const recentMemberships = await MembershipApplication.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .select('firstName lastName email status createdAt');

    const recentLoans = await LoanApplication.find()
      .populate('applicant', 'firstName lastName email')
      .sort({ createdAt: -1 })
      .limit(10)
      .select('loanType requestedAmount status createdAt applicant');

    res.json({
      memberships: recentMemberships,
      loans: recentLoans
    });
  } catch (error) {
    console.error('Recent applications error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;