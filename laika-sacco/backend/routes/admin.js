const express = require('express');
const router = express.Router();
const Member = require('../models/Member');
const auth = require('../middleware/auth');
const { adminAuth } = require('../middleware/auth');

// ✅ GET all members (Admin only)
router.get('/members', auth, adminAuth, async (req, res) => {
  try {
    const members = await Member.find().select('-password');
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ GET single member (Admin only)
router.get('/members/:id', auth, adminAuth, async (req, res) => {
  try {
    const member = await Member.findById(req.params.id).select('-password');
    if (!member) return res.status(404).json({ message: 'Member not found' });
    res.json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ CREATE member (Admin only)
router.post('/members', auth, adminAuth, async (req, res) => {
  try {
    const member = new Member(req.body);
    await member.save();
    res.status(201).json(member);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ✅ UPDATE member (Admin only)
router.put('/members/:id', auth, adminAuth, async (req, res) => {
  try {
    const member = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!member) return res.status(404).json({ message: 'Member not found' });
    res.json(member);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ✅ DELETE member (Admin only)
router.delete('/members/:id', auth, adminAuth, async (req, res) => {
  try {
    const member = await Member.findByIdAndDelete(req.params.id);
    if (!member) return res.status(404).json({ message: 'Member not found' });
    res.json({ message: 'Member deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ ADJUST BALANCE (Admin only)
router.post('/adjust-balance', auth, adminAuth, async (req, res) => {
  const { memberId, amount } = req.body;

  if (!memberId || typeof amount !== 'number') {
    return res.status(400).json({ message: 'Invalid input: memberId and amount are required' });
  }

  try {
    const member = await Member.findById(memberId);
    if (!member) return res.status(404).json({ message: 'Member not found' });

    member.savings += amount;
    await member.save();

    res.json({ message: 'Balance updated successfully', member });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

