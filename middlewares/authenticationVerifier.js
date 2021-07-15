const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const { User } = require('../models/user.model');

async function authenticationVerifier(req, res, next) {
    try {
        const tokenWithBearer = req.headers.authorization;
        const token = tokenWithBearer.split(' ')[1];

        const decodedToken = jwt.verify(token, JWT_SECRET);

        const user = await User.findById(decodedToken._id);

        if (!user) {
            res.status(401).json({
                success: false,
                errorMessage: 'unauthorised access',
            });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ success: false, errorMessage: error.message });
    }
}

module.exports = authenticationVerifier;
