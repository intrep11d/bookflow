const bcrypt = require('bcrypt');
const sequelize = require('../models').sequelize; // Import Sequelize instance
const { User, UserProfile } = require('../models');

const staffController = {
    getAllStaff: async (req, res) => {
        try {
            const staffMembers = await User.findAll({
                include: [{ model: UserProfile, as : 'profile' }],
                where: { role: 'Staff' },

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
    },
    staffAccountDisplay: async (req, res) => {
        try {
            const staffMembers = await User.findAll({
                attributes: ['id', 'username', 'email'], // Specify the fields you want to return
                include: [{
                    model: UserProfile,
                    as: 'profile',
                    attributes: ['firstName', 'lastName', 'phoneNumber', 'address'] // Specify the UserProfile fields
                }],
                where: { role: 'Staff' },
            });

            // Optional: Transform the data if needed before sending the response
            const transformedStaffMembers = staffMembers.map(member => {
                return {
                    id: member.id,
                    username: member.username,
                    email: member.email,
                    profile: {
                        firstName: member.profile.firstName,
                        lastName: member.profile.lastName,
                        phoneNumber: member.profile.phoneNumber,
                        address: member.profile.address
                    }
                };
            });

            res.json(transformedStaffMembers);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};


module.exports = staffController;
