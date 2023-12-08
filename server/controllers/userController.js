const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { User, UserProfile } = require('../models');
const sequelize = require('../models').sequelize; // Import Sequelize instance
const nodemailer = require('nodemailer');
require('dotenv').config();

function sendVerificationEmail(email, token, host) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: 'no-reply@yourdomain.com',
    to: email,
    subject: 'Email Verification',
    text: `Please verify your email by clicking the following link: 
           http://${host}/api/verify-email/${token}`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.error('Error sending verification email', error);
    } else {
      console.log('Verification email sent: ' + info.response);
    }
  });
}

const userController = {
  async signup(req, res) {
    const transaction = await sequelize.transaction(); // Start a new transaction

    try {
      const { username, email, password, firstName, lastName, phoneNumber, address } = req.body;

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      const emailVerificationToken = crypto.randomBytes(20).toString('hex');

      // Create user
      const newUser = await User.create({
        username,
        email,
        passwordHash: hashedPassword,
        role: "Patron",
        emailVerificationToken: emailVerificationToken
      }, { transaction });

      // Create user profile
      await UserProfile.create({
        userId: newUser.id,
        firstName,
        lastName,
        phoneNumber,
        address
      }, { transaction });

      sendVerificationEmail(newUser.email, emailVerificationToken, req.headers.host);

      await transaction.commit(); // Commit the transaction if all goes well



      res.status(201).json({ message: 'User created successfully', userId: newUser.id });
    } catch (error) {
      await transaction.rollback(); // Rollback the transaction in case of error
      res.status(500).send(error.message);
    }

  },

  // ... (other methods, if any)
  verifyEmail: async (req, res) => {
    try {
      const { token } = req.params;
      
      // Find the user by the token
      const user = await User.findOne({ where: { emailVerificationToken: token } });
  
      if (!user) {
        return res.status(400).send('Verification token is invalid or expired.');
      }
  
      // Update user's status to "verified"
      user.isEmailVerified = true;
      user.emailVerificationToken = null; // Clear the token
      await user.save();
  
      res.send('Email successfully verified.');
    } catch (error) {
      console.error('Email verification error:', error);
      res.status(500).send('Error verifying email.');
    }
  }
  
};




module.exports = userController;
