const express = require('express');
const { PlayList } = require('../models/playList.model');
const router = express.Router();
const { User } = require('../models/user.model');

router.get('/', (req, res) => {
    res.json({ success: true, message: 'heya' });
});

// req.body: {fistName, lastName, email, password}
// response {_id, firstName, lastName, email, ref(likedVideos), ref(playLists)}
router.post('/', async (req, res) => {
    try {
        const newUser = req.body;

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
        res.json({ success: false, message: 'unable to create/update user' });
    }
});

module.exports = router;
