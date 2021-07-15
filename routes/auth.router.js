const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

const { User } = require('../models/user.model');

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (user === null) {
            res.json({ success: false, message: 'email or password invalid' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
                expiresIn: '24h',
            });

            user.__v = undefined;
            user.createdAt = undefined;
            user.updatedAt = undefined;
            user.password = undefined;
            res.json({
                success: true,
                user: user,
                token: `Bearer ${token}`,
            });
        } else {
            res.json({ success: false, message: 'email or password invalid' });
        }
    } catch (error) {
        console.log('error', error);
        res.json({ success: false, message: 'auth failed' });
    }
});

module.exports = router;
