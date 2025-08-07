const express = require('express');
const { body, validationResult } = require('express-validator');
const MembershipApplication = require('../models/MembershipApplication');
const auth = require('../middleware/auth');
const sendEmail = require('../utils/email');

const router = express.Router();

// Submit membership application
router.post('/apply', [
  body('firstName').trim().notEmpty(),
  body('lastName').trim().notEmpty(),
  body('email').isEmail().normalizeEmail(),
  body('phone').trim().notEmpty(),
  body('idNumber').trim().notEmpty(),
  body('dateOfBirth').isDate(),
  body('county').trim().notEmpty(),
  body('employer').trim().notEmpty(),
  body('monthlyIncome').isNumeric().custom(value => value > 0)
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if application already exists
    const existingApplication = await MembershipApplication.findOne({ 
      idNumber: req.body.idNumber 
    });
    
    if (existingApplication) {
      return res.status(400).json({ 
        message: 'An application with this ID number already exists' 
      });
    }

    // Create new application
    const application = new MembershipApplication(req.body);
    await application.save();

    // Send confirmation email
    try {
      await sendEmail({
        to: application.email,
        subject: 'Membership Application Received - Laika SACCO',
        html: `
          <h2>Dear ${application.firstName} ${application.lastName},</h2>
          <p>Thank you for your interest in joining Laika SACCO Society Limited.</p>
          <p>We have received your membership application and it is currently under review.</p>
          <p><strong>Application Details:</strong></p>
          <ul>
            <li>Application ID: ${application._id}</li>
            <li>Name: ${application.firstName} ${application.lastName}</li>
            <li>Email: ${application.email}</li>
            <li>Phone: ${application.phone}</li>
          </ul>
          <p>Our team will review your application and get back to you within 3-5 business days.</p>
          <p>If you have any questions, please contact us at info@laikasacco.com or call us at +254 700 000 000.</p>
          <br>
          <p>Best regards,<br>Laika SACCO Team</p>
        `
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
    }

    res.status(201).json({
      message: 'Membership application submitted successfully',
      applicationId: application._id
    });
  } catch (error) {
    console.error('Membership application error:', error);
    res.status(500).json({ message: 'Server error during application submission' });
  }
});

// Get all applications (admin only)
router.get('/applications', auth, async (req, res) => {
  try {
    // This would need admin role check in a real app
    const applications = await MembershipApplication.find()
      .sort({ createdAt: -1 })
      .limit(50);
    
    res.json(applications);
  } catch (error) {
    console.error('Fetch applications error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single application
router.get('/applications/:id', auth, async (req, res) => {
  try {
    const application = await MembershipApplication.findById(req.params.id);
    
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    
    res.json(application);
  } catch (error) {
    console.error('Fetch application error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update application status (admin only)
router.patch('/applications/:id/status', auth, [
  body('status').isIn(['pending', 'under-review', 'approved', 'rejected']),
  body('reviewNotes').optional().trim()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { status, reviewNotes } = req.body;
    
    const application = await MembershipApplication.findByIdAndUpdate(
      req.params.id,
      {
        status,
        reviewNotes,
        reviewedBy: req.user.userId,
        reviewDate: new Date()
      },
      { new: true }
    );

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    // Send status update email
    let emailSubject = '';
    let emailContent = '';
    
    switch (status) {
      case 'approved':
        emailSubject = 'Membership Application Approved - Welcome to Laika SACCO';
        emailContent = `
          <h2>Congratulations ${application.firstName}!</h2>
          <p>Your membership application has been approved. Welcome to Laika SACCO!</p>
          <p>Next steps:</p>
          <ul>
            <li>Visit our office to complete your membership registration</li>
            <li>Bring your original ID and other required documents</li>
            <li>Make your initial share capital deposit</li>
          </ul>
        `;
        break;
      case 'rejected':
        emailSubject = 'Membership Application Update - Laika SACCO';
        emailContent = `
          <h2>Dear ${application.firstName},</h2>
          <p>Thank you for your interest in joining Laika SACCO.</p>
          <p>Unfortunately, we are unable to approve your membership application at this time.</p>
          ${reviewNotes ? `<p>Reason: ${reviewNotes}</p>` : ''}
          <p>You may reapply after addressing the concerns mentioned above.</p>
        `;
        break;
    }

    if (emailSubject) {
      try {
        await sendEmail({
          to: application.email,
          subject: emailSubject,
          html: emailContent
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
      }
    }

    res.json({ message: 'Application status updated', application });
  } catch (error) {
    console.error('Update application error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;