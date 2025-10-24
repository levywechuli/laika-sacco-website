const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// 🏦 Savings sub-schema
const savingsSchema = new mongoose.Schema({
  name: { type: String, required: false },
  amount: { type: Number, default: 0 }
}, { _id: false });

// 💸 Loan sub-schema
const loanSchema = new mongoose.Schema({
  name: { type: String, required: false },
  balance: { type: Number, default: 0 },
  limit: { type: Number, default: 0 },
  status: { type: String, default: 'Available' }
}, { _id: false });

// 👤 User schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, default: '' },
  email: { type: String, unique: true, sparse: true },
  membershipNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['member', 'admin'], default: 'member' },
  membershipStatus: { type: String, enum: ['active', 'inactive', 'pending'], default: 'active' },

  // 🧮 Arrays (can be empty safely)
  savingsProducts: { type: [savingsSchema], default: [] },
  loanProducts: { type: [loanSchema], default: [] },

  // 🧾 Totals
  totalSavings: { type: Number, default: 0 },
  totalLoanBalance: { type: Number, default: 0 },

  // 📅 Activity
  lastLogin: { type: Date },
}, { timestamps: true });

// 🔐 Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// ✅ Compare passwords
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// 👀 Public profile (safe response)
userSchema.methods.publicProfile = function () {
  return {
    _id: this._id,
    fullName: `${this.firstName} ${this.lastName}`.trim(),
    membershipNumber: this.membershipNumber,
    email: this.email,
    role: this.role,
    membershipStatus: this.membershipStatus,
    totalSavings: this.totalSavings,
    totalLoanBalance: this.totalLoanBalance,
    lastLogin: this.lastLogin
  };
};

module.exports = mongoose.model('User', userSchema);




