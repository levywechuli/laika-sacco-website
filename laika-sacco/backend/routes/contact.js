const express = require('express');
const { body, validationResult } = require('express-validator');
const sendEmail = require('../utils/email');

const router = express.Router();

// Submit contact form
router.post('/submit', [
  body('name').trim().notEmpty(),
  body('email').isEmail().normalizeEmail(),
  body('subject').trim().notEmpty(),
  body('message').trim().isLength({ min: 10 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, subject, message } = req.body;

    // Send email to admin
    try {
      await sendEmail({
        to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
        subject: `Contact Form: ${subject}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><em>Sent from Laika SACCO website contact form</em></p>
        `
      });

      // Send confirmation email to user
      await sendEmail({
        to: email,
        subject: 'Thank you for contacting Laika SACCO',
        html: `
          <h2>Dear ${name},</h2>
          <p>Thank you for contacting Laika SACCO Society Limited.</p>
          <p>We have received your message regarding: <strong>${subject}</strong></p>
          <p>Our team will review your inquiry and respond within 24-48 hours during business days.</p>
          <p>If your matter is urgent, please call us directly at +254 700 000 000.</p>
          <br>
          <p>Best regards,<br>Laika SACCO Customer Service Team</p>
        `
      });

      res.json({ message: 'Message sent successfully. We will get back to you soon!' });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      res.status(500).json({ message: 'Failed to send message. Please try again later.' });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

module.exports = router;