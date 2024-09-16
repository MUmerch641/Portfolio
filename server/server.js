const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Allowed origins
const allowedOrigins = [
  'https://portfolio-m17q-client-pc9whoylb-mumerch641s-projects.vercel.app',
  'https://portfolio-m17q-client-a88d2cm0w-mumerch641s-projects.vercel.app',
  'https://portfolio-m17q-client-mp2uhygem-mumerch641s-projects.vercel.app' // Add the new origin here
];


// CORS configuration
app.use(cors({
  origin: '*', // This will allow requests from any origin, useful for debugging
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
}));


app.use(express.json());

// Nodemailer configuration (ensure you handle credentials safely)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Route to handle form submission
app.post('/contact', (req, res) => {
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
