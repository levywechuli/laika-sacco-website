const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/User');
const MembershipApplication = require('../models/MembershipApplication');
const LoanApplication = require('../models/LoanApplication');

const router = express.Router();

/**
 * 🧭 MEMBER DASHBOARD
 * Returns personalized info for the logged-in member
 */
router.get('/member', auth, async (req, res) => {
  try {
    // Find the logged-in member (excluding password)
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'Member not found' });
    }

    // TODO: Replace placeholder data below with your actual savings + loan logic
    const dashboardData = {
      memberName: `${user.firstName} ${user.lastName}`,
      membershipNumber: user.membershipNumber,
      totalSavings: 86550,
      totalLoanBalance: 175000,
      savingsSummary: [
        { name: 'Deposits', amount: 45750 },
        { name: 'Jibebe', amount: 12300 },
        { name: 'Share Capital', amount: 28500 }
      ],
      loans: [
        { name: 'Normal Loan', balance: 150000, limit: 200000, status: 'Active' },
        { name: 'Emergency Loan', balance: 25000, limit: 50000, status: 'Active' },
        { name: 'Development Loan', balance: 0, limit: 500000, status: 'Available' }
      ]
    };

    res.json(dashboardData);
  } catch (error) {
    console.error('Member dashboard error:', error);
    res.status(500).json({ message: 'Server error loading dashboard' });
  }
});

/**
 * 🧮 ADMIN DASHBOARD
 * Returns overall system stats (requires admin role ideally)
 */
router.get('/stats', auth, async (req, res) => {
  try {
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

/**
 * 📄 ADMIN - Recent applications
 */
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
