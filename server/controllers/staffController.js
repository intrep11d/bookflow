const bcrypt = require('bcrypt');
const sequelize = require('../models').sequelize; // Import Sequelize instance
const { User, UserProfile } = require('../models');

const staffController = {
    getAllStaff: async (req, res) => {
        try {
            const staffMembers = await User.findAll({
                include: [{ model: UserProfile }],
                where: { role: 'Staff' }
            });
            res.json(staffMembers);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    addStaff: async (req, res) => {
        try {
            const { username, email, password, firstName, lastName, phoneNumber, address } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({
                username,
                email,
                passwordHash: hashedPassword, // Ensure this is hashed
                role: "Staff",

            });

            await UserProfile.create({
                userId: newUser.id,
                firstName,
                lastName,
                phoneNumber,
                address
            });

            res.status(201).json({ message: 'Staff created successfully', userId: newUser.id });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = staffController;
