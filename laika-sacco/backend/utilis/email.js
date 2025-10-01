// backend/utilis/email.js
const nodemailer = require('nodemailer');

const createTransporter = () => {
  // Note: ensure process.env.EMAIL_HOST and EMAIL_PORT are set correctly
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: process.env.EMAIL_PORT == '465', // true for 465, false otherwise
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

const sendEmail = async ({ to, subject, text, html }) => {
  try {
    const transporter = createTransporter();
    const mailOptions = {
      from: `"Laika SACCO" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return result;
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};

module.exports = sendEmail;
