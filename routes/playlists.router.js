const express = require('express');
const { extend } = require('lodash');
const router = express.Router();
const { PlayList } = require('../models/playList.model');
const { User } = require('../models/user.model');

//get(/:listId) -> getting a particular list
//post (/:listId) -> making changes to a particular list
//delete (/:listId) -> deleting a play list

//get(/users/:userId) -> return all the lists for a user
//post(/users/:userId) -> creating list for a user

router.get('/', async (req, res) => {
    try {
        const videos = await PlayList.find({});
        res.json({ success: true, videos });
    } catch (error) {
        console.error(error);
        res.json({ success: false, error: 'could not get playlists' });
    }
});

//TODO make a router.params()
//get(/users/:userId) -> return all the lists for a user
router.get('/users/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const videos = await PlayList.find({ user: userId }).populate('videos');
        res.json({ success: true, playLists: videos });
    } catch (error) {
        console.error(error);
    }
});

//post(/users/:userId) -> creating list for a user
// req.body: {name}
router.post('/users/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const newPlayList = req.body;

        let playList = new PlayList({
            name: newPlayList.name,
            user: userId,
            videos: [],
        });

        playList = await playList.save();

        res.json({ success: true, playList: playList });
    } catch (error) {
        console.error(error);
        res.json({ success: false, error: error.message });
    }
});

//TODO make a router.params() for getting the playList from the database
//TODO and handling the relevant errors.
//get(/:listId) -> getting a particular list
router.get('/:playListId', async (req, res) => {
    try {
        const { playListId } = req.params;
        const playList = await PlayList.findById(playListId).populate('videos');

        res.json({ success: true, playList });
    } catch (error) {
        console.error(error);
        res.json({ success: false, error: error.message });
    }
});
// to update a playlist
//req.body: {name: newName, visibility: newVisibility}
router.post('/:playListId', async (req, res) => {
    try {
        const { playListId } = req.params;
        const playlistUpdates = req.body;

        let playList = await PlayList.findById(playListId);

        playList = extend(playList, playlistUpdates);
        playlist = await playList.save();
        playlist = await playList.populate('videos');

        res.json({ success: true, playList });
    } catch (error) {
        console.error(error);
        res.json({ success: false, error: error.message });
    }
});

//delete(/:playListId)
router.delete('/:playListId', async (req, res) => {
    try {
        const { playListId } = req.params;
        let playList = await PlayList.findById(playListId);

        playList = playList.remove();

        res.json({ success: true, playList });
    } catch (error) {
        console.error(error);
        res.json({ success: false, error: error.message });
    }
});

//TODO make a router.params()
//adding video to a play list
router.post('/:playListId/videos', async (req, res) => {
    try {
        const { videoId } = req.body;
        const { playListId } = req.params;

        let playList = await PlayList.findById(playListId);
        //TODO check if the video is already present
        playList.videos.push(videoId);

        playList = await playList.save();
        playList = await playList.populate('videos');

        res.json({ success: true, playList });
    } catch (error) {
        console.error(error);
        res.json({ success: false, error: error.message });
    }
});

router.delete('/:playListId/videos', async (req, res) => {
    try {
        const { videoId } = req.body;
        const { playListId } = req.params;
        let playList = await PlayList.findById(playListId);
        playList.videos = playList.videos.filter(
            (video) => video._id.toString() !== videoId
        );

        playList = await playList.save();
        playList = await playList.populate('videos');

        res.json({ success: true, playList });
    } catch (error) {
        console.error(error);
        res.json({ success: false, error: error.message });
    }
});

module.exports = router;
