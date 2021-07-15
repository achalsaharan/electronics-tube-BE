const express = require('express');
const router = express.Router();
const { LikedVideo } = require('../models/likedVideo.model');
const { User } = require('../models/user.model');

router.get('/', async (req, res) => {
    try {
        const likedVideos = await LikedVideo.find({}).populate('videos');
        res.json({ success: true, likedVideos });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            success: false,
            error: 'could not get liked videos',
        });
    }
});

//function to check if the userId is corret and then adding it to req
router.param('userId', async (req, res, next, userId) => {
    try {
        const user = await User.findById(userId);

        if (user === null) {
            res.json({ success: false, error: 'incorrect userId' });
        } else {
            req.userId = userId;
            next();
        }
    } catch (error) {
        console.error(error);
        res.json({ success: false, error: error.message });
    }
});

// returns liked videos
router.get('/:userId', async (req, res) => {
    try {
        const userId = req.userId;
        let likedVideos = await LikedVideo.findOne({ user: userId }).populate(
            'videos'
        );
        //if the like videos document is not created yet for a user
        if (likedVideos === null) {
            res.json({ success: true, videos: [] });
        } else {
            res.json({ success: true, videos: likedVideos.videos });
        }
    } catch (error) {
        console.error(error);
        res.json({ success: false, error: error.message });
    }
});

// req.body: {_id}
//response: liked videos for the user
router.post('/:userId', async (req, res) => {
    try {
        const userId = req.userId;
        const { _id } = req.body;
        let likedVideos = await LikedVideo.findOne({ user: userId });

        // if likedVideos is not created for the user yet
        if (likedVideos === null) {
            likedVideos = new LikedVideo({ user: userId, videos: [_id] });
            await likedVideos.save();
        } else {
            //checking if the video is already present
            const isPresent = likedVideos.videos.find(
                (video) => video.toString() === _id
            )
                ? true
                : false;

            if (!isPresent) {
                likedVideos.videos.push(_id);
                await likedVideos.save();
            }
        }

        likedVideos = await likedVideos.populate('videos');

        res.json({ success: true, videos: likedVideos.videos });
    } catch (error) {
        console.log(error);
        res.json({ success: false, error: error.message });
    }
});

//req.body: {_id}
//response: liked videos to the user
router.delete('/:userId', async (req, res) => {
    try {
        const userId = req.userId;
        const { _id } = req.body;

        let likedVideos = await LikedVideo.findOne({ user: userId });

        likedVideos.videos = likedVideos.videos.filter(
            (video) => video.toString() !== _id
        );

        likedVideos = await likedVideos.save();

        likedVideos = await likedVideos.populate('videos');

        res.json({ success: true, videos: likedVideos.videos });
    } catch (error) {
        console.error(error);
        res.json({ success: false, error: error.message });
    }
});

module.exports = router;
