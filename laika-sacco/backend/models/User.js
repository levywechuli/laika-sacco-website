const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const loanSchema = new mongoose.Schema({
  name: { type: String, required: true },         // e.g., "Normal Loan"
  balance: { type: Number, default: 0 },          // e.g., 150000
  limit: { type: Number, default: 0 },            // e.g., 200000
  status: { type: String, enum: ['Active', 'Available'], default: 'Available' }
});

const savingSchema = new mongoose.Schema({
  name: { type: String, required: true },         // e.g., "Deposits"
  balance: { type: Number, default: 0 }           // e.g., 45750
});

const userSchema = new mongoose.Schema({
  // Login credentials
  membershipNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  password: {
    type: String,
    required: true,
    minlength: 6
  },

  // Personal info
  fullName: {
    type: String,
    
  },

  // Financial data
  savingsProducts: [savingSchema],   // e.g. Deposits, Jibebe, Share Capital
  loanProducts: [loanSchema],        // e.g. Normal Loan, Emergency Loan, etc.

  membershipStatus: {
    type: String,
    enum: ['active', 'pending', 'suspended', 'inactive'],
    default: 'active'
  },

  lastLogin: Date
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);



