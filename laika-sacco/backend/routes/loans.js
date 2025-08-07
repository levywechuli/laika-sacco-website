const express = require('express');
const { body, validationResult } = require('express-validator');
const LoanApplication = require('../models/LoanApplication');
const auth = require('../middleware/auth');
const sendEmail = require('../utils/email');

const router = express.Router();

// Submit loan application
router.post('/apply', auth, [
  body('loanType').isIn(['development', 'emergency', 'school-fee', 'business', 'personal']),
  body('requestedAmount').isNumeric().custom(value => value >= 1000),
  body('purpose').trim().notEmpty(),
  body('repaymentPeriod').isInt({ min: 1, max: 48 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Calculate loan terms based on type
    const loanRates = {
      'development': 0.01, // 1% per month
      'emergency': 0.0175, // 1.75% per month
      'school-fee': 0.015, // 1.5% per month
      'business': 0.015, // 1.5% per month
      'personal': 0.02 // 2% per month
    };

    const { loanType, requestedAmount, purpose, repaymentPeriod } = req.body;
    const interestRate = loanRates[loanType];
    const monthlyInstallment = calculateMonthlyInstallment(requestedAmount, interestRate, repaymentPeriod);
    const totalRepayment = monthlyInstallment * repaymentPeriod;

    // Create loan application
    const loanApplication = new LoanApplication({
      applicant: req.user.userId,
      loanType,
      requestedAmount,
      purpose,
      repaymentPeriod,
      interestRate,
      monthlyInstallment,
      totalRepayment,
      ...req.body
    });

    await loanApplication.save();

    // Send confirmation email
    try {
      const user = await require('../models/User').findById(req.user.userId);
      await sendEmail({
        to: user.email,
        subject: 'Loan Application Received - Laika SACCO',
        html: `
          <h2>Dear ${user.firstName} ${user.lastName},</h2>
          <p>We have received your loan application and it is currently under review.</p>
          <p><strong>Application Details:</strong></p>
          <ul>
            <li>Application ID: ${loanApplication._id}</li>
            <li>Loan Type: ${loanType.replace('-', ' ').toUpperCase()}</li>
            <li>Requested Amount: KES ${requestedAmount.toLocaleString()}</li>
            <li>Repayment Period: ${repaymentPeriod} months</li>
            <li>Estimated Monthly Payment: KES ${monthlyInstallment.toLocaleString()}</li>
          </ul>
          <p>Our loans team will review your application and get back to you within 3-5 business days.</p>
          <br>
          <p>Best regards,<br>Laika SACCO Loans Department</p>
        `
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
    }

    res.status(201).json({
      message: 'Loan application submitted successfully',
      applicationId: loanApplication._id,
      estimatedMonthlyPayment: monthlyInstallment
    });
  } catch (error) {
    console.error('Loan application error:', error);
    res.status(500).json({ message: 'Server error during loan application' });
  }
});

// Get user's loan applications
router.get('/my-applications', auth, async (req, res) => {
  try {
    const applications = await LoanApplication.find({ applicant: req.user.userId })
      .sort({ createdAt: -1 });
    
    res.json(applications);
  } catch (error) {
    console.error('Fetch loan applications error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Calculate monthly installment (reducing balance)
function calculateMonthlyInstallment(principal, monthlyRate, months) {
  if (monthlyRate === 0) return principal / months;
  
  const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
    (Math.pow(1 + monthlyRate, months) - 1);
  
  return Math.round(monthlyPayment);
}

module.exports = router;