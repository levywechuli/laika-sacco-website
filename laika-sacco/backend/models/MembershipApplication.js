const mongoose = require('mongoose');

const membershipApplicationSchema = new mongoose.Schema({
  // Personal Information
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  idNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },
  maritalStatus: {
    type: String,
    enum: ['single', 'married', 'divorced', 'widowed'],
    required: true
  },
  
  // Address Information
  county: {
    type: String,
    required: true,
    trim: true
  },
  town: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  
  // Employment Information
  employer: {
    type: String,
    required: true,
    trim: true
  },
  position: {
    type: String,
    required: true,
    trim: true
  },
  employmentType: {
    type: String,
    enum: ['permanent', 'contract', 'casual', 'self-employed'],
    required: true
  },
  monthlyIncome: {
    type: Number,
    required: true,
    min: 0
  },
  
  // Next of Kin
  nextOfKinName: {
    type: String,
    required: true,
    trim: true
  },
  nextOfKinPhone: {
    type: String,
    required: true,
    trim: true
  },
  nextOfKinRelationship: {
    type: String,
    required: true,
    trim: true
  },
  
  // Account Selection
  accountTypes: [{
    type: String,
    enum: ['shares', 'deposits', 'withdrawable-deposits', 'junior-account']
  }],
  
  // Application Status
  status: {
    type: String,
    enum: ['pending', 'under-review', 'approved', 'rejected'],
    default: 'pending'
  },
  reviewedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  reviewDate: Date,
  reviewNotes: String,
  
  // Additional Information
  comments: String,
  
  // Documents (file URLs)
  documents: {
    idCopy: String,
    passportPhoto: String,
    employmentLetter: String,
    salarySlip: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('MembershipApplication', membershipApplicationSchema);