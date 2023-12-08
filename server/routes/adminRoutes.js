const express = require('express');
const router = express.Router();
const adminOnly = require('./adminOnly');


router.get('/BookFlow-Admin-userTable', adminOnly, (req, res) => {
    // Only accessible to admin
    res.json({ message: 'Welcome to the admin dashboard' });
});

module.exports = router;   