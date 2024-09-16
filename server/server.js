const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors({
  origin: 'https://portfolio-m17q-client-a88d2cm0w-mumerch641s-projects.vercel.app' // Allow your client origin
}));
app.use(express.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abubakaramin2006@gmail.com',
    pass: 'yrss dfpw znks yveh',
  },
});

// Route to handle form submission
app.post('/contact', (req, res) => {
  console.log("Entered");
  res.send("Send")
  const { firstName, lastName, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'abubakaramin2006@gmail.com',
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
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
