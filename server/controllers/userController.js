const bcrypt = require('bcrypt');
const { User } = require('../models');


const userController = {
    async signup(req, res) {
      try {
        const { username, email, password, role } = req.body;
  
        // Additional validation can be added here
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
          username,
          email,
          passwordHash: hashedPassword,
          role: "Patron"
        });
  
        // Send a successful response
        res.status(201).json({ message: "User created successfully", userId: newUser.id });
      } catch (error) {
        res.status(500).send(error.message);
      }
    }
  };
  
  module.exports = userController;