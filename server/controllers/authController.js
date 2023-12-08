// authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/'); // Import your user model

const authController = {
    // User login function
    login: async (req, res) => {
      try {
        const { credential, password } = req.body;
  
       // Determine if the credential is an email or username
    const isEmail = credential.includes('@');

    // Find user by email or username
    const user = await User.findOne({
      where: isEmail ? { email: credential } : { username: credential }
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
        // User is valid, create JWT payload
        const payload = {
          id: user.id,
          email: user.email,
          // You can add more user details here if needed
        };
        
        const { rememberMe } = req.body; // Assuming this is sent from the frontend
        const expiresIn = rememberMe ? '7d' : '1h'; // Set a longer duration if rememberMe is true
        // Sign the token
        jwt.sign(
          payload,
          process.env.JWT_SECRET, // Make sure to have your JWT_SECRET in your .env file
          { expiresIn: expiresIn },
            (err, token) => {
            if (err) throw err;
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
      }
    },
  
    // Add other authentication related functions here if needed
  };

  module.exports = authController;