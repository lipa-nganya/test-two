const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure nodemailer using SMTP settings from dial-a-drink project
function createTransporter() {
  const smtpHost = process.env.SMTP_HOST || process.env.EMAIL_HOST || 'smtp.gmail.com';
  const smtpPort = process.env.SMTP_PORT || process.env.EMAIL_PORT || 587;
  const smtpSecure = process.env.SMTP_SECURE === 'true';
  const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASSWORD;
  const smtpFrom = process.env.SMTP_FROM || process.env.EMAIL_FROM || smtpUser;

  if (!smtpHost || !smtpPort) {
    console.warn('⚠️  SMTP configuration not found. Email sending will be disabled.');
    return null;
  }

  if (!smtpUser || !smtpPass) {
    console.warn('⚠️  SMTP credentials not configured. Email sending will be disabled.');
    return null;
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: smtpSecure || Number(smtpPort) === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });
}

const transporter = createTransporter();

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message, carType } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    if (!transporter) {
      return res.status(500).json({ 
        success: false, 
        message: 'Email service not configured. Please contact us directly.' 
      });
    }

    const smtpFrom = process.env.SMTP_FROM || process.env.EMAIL_FROM || process.env.SMTP_USER || process.env.EMAIL_USER;
    const contactEmail = process.env.CONTACT_EMAIL || smtpFrom || 'kelvin@example.com';

    // Email content
    const mailOptions = {
      from: `"Kelvin Murumba Custom Cars" <${smtpFrom}>`,
      to: contactEmail,
      subject: `New Custom Car Inquiry from ${name}`,
      html: `
        <h2>New Custom Car Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Car Type:</strong> ${carType || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>Sent from Kelvin Murumba Custom Cars website</em></p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({ 
      success: true, 
      message: 'Thank you for your inquiry! We will get back to you soon.' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send inquiry. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});

