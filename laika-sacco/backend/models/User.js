const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
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
  phone: {
    type: String,
    required: true,
    trim: true
  },
  membershipNumber: {
    type: String,
    unique: true,
    sparse: true
  },
  role: {
    type: String,
    enum: ['member', 'admin', 'staff'],
    default: 'member'
  },
  membershipStatus: {
    type: String,
    enum: ['pending', 'active', 'suspended', 'inactive'],
    default: 'pending'
  },
  dateJoined: {
    type: Date,
    default: Date.now
  },
  lastLogin: Date,
  isEmailVerified: {
    type: Boolean,
    default: false
  },
  emailVerificationToken: String,
  passwordResetToken: String,
  passwordResetExpires: Date
}, {
  timestamps: true
});

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

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Generate membership number
userSchema.pre('save', async function(next) {
  if (!this.membershipNumber && this.membershipStatus === 'active') {
    const count = await mongoose.model('User').countDocuments();
    this.membershipNumber = `LSL${String(count + 1).padStart(6, '0')}`;
  }
  next();
});

module.exports = mongoose.model('User', userSchema);