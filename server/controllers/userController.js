const bcrypt = require('bcrypt');
const { User, UserProfile } = require('../models');
const sequelize = require('../models').sequelize; // Import Sequelize instance

const userController = {
  async signup(req, res) {
    const transaction = await sequelize.transaction(); // Start a new transaction

    try {
      const { username, email, password, firstName, lastName, phoneNumber, address } = req.body;

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user
      const newUser = await User.create({
        username,
        email,
        passwordHash: hashedPassword,
        role: "Patron"
      }, { transaction });

      // Create user profile
      await UserProfile.create({
        userId: newUser.id,
        firstName,
        lastName,
        phoneNumber,
        address
      }, { transaction });

      await transaction.commit(); // Commit the transaction if all goes well
      res.status(201).json({ message: 'User created successfully', userId: newUser.id });
    } catch (error) {
      await transaction.rollback(); // Rollback the transaction in case of error
      res.status(500).send(error.message);
    }
  }

  // ... (other methods, if any)
};

module.exports = userController;
