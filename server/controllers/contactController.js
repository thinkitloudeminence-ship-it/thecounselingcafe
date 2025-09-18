const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email and message required' });
    }

    const contact = new Contact({ name, email, phone, message });
    await contact.save();

    // send email notification (optional)
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // send to site admin
        subject: `New Contact: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
      });
    } catch (err) {
      console.warn('Email not sent:', err.message);
    }

    res.status(201).json({ message: 'Contact saved' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
