const express = require('express');
const router = express.Router();
const { Video } = require('../models/video.model');
const { videos } = require('../videosDB');

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

router.post('/addVideos', async (req, res) => {
    for (let i = 0; i < videos.length; i++) {
        const video = videos[i];

        try {
            newVideo = await new Video(video);
            await newVideo.save();
        } catch (error) {
            console.log(error);
            res.json({ error: 'error occoured' });
        }
    }

    const savedVideos = await Video.find({});

    res.json({ savedVideos });
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
