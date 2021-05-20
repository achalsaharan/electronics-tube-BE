const express = require('express');
const router = express.Router();
const { Video } = require('../models/video.model');

router.get('/', async (req, res) => {
    try {
        const videos = await Video.find({});
        res.json({ success: true, videos });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'could not get videos' });
    }
});

router.post('/', async (req, res) => {
    try {
        let newVideo = req.body;
        newVideo = new Video(newVideo);
        newVideo = await newVideo.save();

        res.json({ success: true, newVideo });
    } catch (error) {
        console.log(error);
        res.json({ success: false, error: error.message });
    }
});

router.get('/:videoId', async (req, res) => {
    try {
        const { videoId } = req.params;
        const video = await Video.findOne({ videoId });

        if (video) {
            res.json({ success: true, video });
        } else {
            res.json({ success: false, error: 'video with this ID not found' });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, error: error.message });
    }
});

module.exports = router;
