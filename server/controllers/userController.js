const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { User, UserProfile } = require('../models');
const sequelize = require('../models').sequelize; // Import Sequelize instance
const nodemailer = require('nodemailer');
require('dotenv').config();

//Protect endpoints from unauthorized users
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
           http://${host}/api/users/verify-email/${token}`
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
      user.status = 'Verified';
      user.emailVerificationToken = null; // Clear the token
      await user.save();
  
      res.send('Email successfully verified.');
    } catch (error) {
      console.error('Email verification error:', error);
      res.status(500).send('Error verifying email.');
    }
  },

  getEssentialUserData: async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: ['firstName', 'lastName','username', 'phoneNumber', 'email'] // Specify the fields you want to retrieve
      });
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ message: 'Error fetching user data' });
    }
  },

  
  
  patronAccountDisplay: async (req, res) => {
  try {
    const patronMembers = await User.findAll({
      attributes: ['id', 'username', 'email', 'status'], // Specify the fields you want to return
      include: [{
        model: UserProfile,
        as: 'profile',
        attributes: ['firstName', 'lastName', 'phoneNumber', 'address'] // Specify the UserProfile fields
      }],
      where: { role: 'Patron' },
    });

    // Optional: Transform the data if needed before sending the response
    const transformedPatronMembers = patronMembers.map(member => {
      return {
        id: member.id,
        username: member.username,
        email: member.email,
        status: member.status,
        profile: {
          firstName: member.profile.firstName,
          lastName: member.profile.lastName,
          phoneNumber: member.profile.phoneNumber,
          address: member.profile.address
        }
      };
    });

    res.json(transformedPatronMembers);
  } catch (error) {
    res.status(500).send(error.message);
  }
  },


  updateUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const updatedData = req.body;

      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }

      await user.update(updatedData);
      return res.status(200).send({ message: 'User updated successfully', user });
    } catch (error) {
      res.status(500).send({ message: 'Error updating user', error });
    }
  },

  // In your userController.js
  getUserById: async (req, res) => {
  try {
    const user = await UserProfile.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
},

};


module.exports = userController;
