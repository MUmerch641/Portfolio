const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
require('dotenv').config(); // To load .env variables in local dev

app.use(express.json());

// Handle preflight requests (OPTIONS method)
app.options('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins temporarily for testing
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.send();
});

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Route to handle form submission
app.post('/contact', (req, res) => {
  // Manually set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins temporarily for testing
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const { firstName, lastName, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
      return res.status(500).json({ success: false, message: 'Failed to send email' });
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).json({ success: true, message: 'Email sent successfully' });
    }
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
