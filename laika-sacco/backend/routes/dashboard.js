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
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'Member not found' });
    }

    // Use real data from DB
    const savingsSummary = user.savingsProducts?.length
      ? user.savingsProducts.map(s => ({
          name: s.name,
          amount: s.amount
        }))
      : [
          { name: 'Deposits', amount: 0 },
          { name: 'Jibebe', amount: 0 },
          { name: 'Share Capital', amount: 0 }
        ];

    const loans = user.loanProducts?.length
      ? user.loanProducts
      : [
          { name: 'Normal Loan', balance: 0, limit: 0, status: 'Available' },
          { name: 'Emergency Loan', balance: 0, limit: 0, status: 'Available' },
          { name: 'Development Loan', balance: 0, limit: 0, status: 'Available' }
        ];

    const dashboardData = {
      memberName: `${user.firstName} ${user.lastName || ''}`.trim(),
      membershipNumber: user.membershipNumber,
      totalSavings: user.totalSavings || 0,
      totalLoanBalance: user.totalLoanBalance || 0,
      savingsSummary,
      loans
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
