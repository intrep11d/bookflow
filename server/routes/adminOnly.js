const jwt = require('jsonwebtoken');

const adminOnly = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Safeguard with optional chaining

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role === 'Admin') {
            req.user = decoded;
            next();
    } else {
            return res.status(403).json({ message: 'Access denied' });
        }
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = adminOnly;
