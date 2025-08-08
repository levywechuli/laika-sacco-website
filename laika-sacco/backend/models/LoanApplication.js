const mongoose = require('mongoose');

const loanApplicationSchema = new mongoose.Schema({
  applicant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  
  // Loan Details
  loanType: {
    type: String,
    enum: ['development', 'emergency', 'school-fee', 'business', 'personal'],
    required: true
  },
  requestedAmount: {
    type: Number,
    required: true,
    min: 1000
  },
  purpose: {
    type: String,
    required: true,
    trim: true
  },
  repaymentPeriod: {
    type: Number, // in months
    required: true,
    min: 1,
    max: 48
  },
  
  // Guarantors (for development loans)
  guarantors: [{
    name: {
      type: String,
      trim: true
    },
    membershipNumber: {
      type: String,
      trim: true
    },
    phone: {
      type: String,
      trim: true
    },
    idNumber: {
      type: String,
      trim: true
    },
    guaranteedAmount: {
      type: Number,
      min: 0
    }
  }],
  
  // Collateral Information
  collateral: {
    type: String,
    trim: true
  },
  collateralValue: {
    type: Number,
    min: 0
  },
  
  // Application Status
  status: {
    type: String,
    enum: ['pending', 'under-review', 'approved', 'rejected', 'disbursed', 'completed'],
    default: 'pending'
  },
  
  // Approval Details
  approvedAmount: Number,
  approvedRate: Number,
  approvedPeriod: Number,
  approvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  approvalDate: Date,
  disbursementDate: Date,
  
  // Review Information
  reviewNotes: String,
  rejectionReason: String,
  
  // Loan Terms
  interestRate: Number,
  monthlyInstallment: Number,
  totalRepayment: Number,
  
  // Documents
  documents: {
    applicationForm: String,
    collateralDocuments: String,
    guarantorForms: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('LoanApplication', loanApplicationSchema);