const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { PlayList } = require('../models/playList.model');
const { User } = require('../models/user.model');

router.get('/', (req, res) => {
    res.json({ success: true, message: 'heya' });
});

// req.body: {fistName, lastName, email, password}
// response {_id, firstName, lastName, email, ref(likedVideos), ref(playLists)}
router.post('/', async (req, res) => {
    try {
        const newUser = req.body;

        //hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newUser.password, salt);
        console.log(hashedPassword);

        newUser.password = hashedPassword;

        const user = new User(newUser);
        await user.save();

        //making a watch later playList for the user
        let watchLaterList = new PlayList({
            user: user._id.toString(),
            name: 'watch later',
            videos: [],
        });

        watchLaterList = await watchLaterList.save();

        res.json({ success: true, user: user });
    } catch (error) {
        console.log('error creating/updating user', error);
        res.json({ success: false, message: error.message });
    }
});

module.exports = router;
