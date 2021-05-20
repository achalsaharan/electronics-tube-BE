const express = require('express');
const router = express.Router();
const { Note } = require('../models/note.model');

router.get('/', async (req, res) => {
    res.json('you are here brah');
});

//getting all notes for a user for a video
//req.body:{videoId}
router.get('/users/:userId/:videoId', async (req, res) => {
    try {
        const { userId, videoId } = req.params;
        // const { videoId } = req.body;

        console.log(userId, videoId);

        const notes = await Note.find({ user: userId, video: videoId });
        console.log(notes);
        res.json({ success: true, notes: notes });
    } catch (error) {
        console.log(error);
        res.json({ success: false, error: error.message });
    }
});

//creating a note for a user and video
//req.body:{userId, videoId, heading, content}
router.post('/', async (req, res) => {
    try {
        const { userId, videoId, heading, content } = req.body;

        let note = new Note({
            user: userId,
            video: videoId,
            heading: heading,
            content: content,
        });

        note = await note.save();

        res.json({ success: true, note: note });
    } catch (error) {
        console.log(error);
        res.json({ success: false, error: error.message });
    }
});

//TODO use router.params and handle the errors
router.post('/:noteId', async (req, res) => {
    try {
        const { noteId } = req.params;
        const { heading, content } = req.body;

        let note = await Note.findById(noteId);

        if (content !== null) {
            note.content = content;
        }

        if (heading !== null) {
            note.heading = heading;
        }

        note = await note.save();

        res.json({ success: true, note: note });
    } catch (error) {
        console.log(error);
        res.json({ success: false, error: error.message });
    }
});

router.delete('/:noteId', async (req, res) => {
    try {
        const { noteId } = req.params;
        let note = await Note.findById(noteId);
        note = await note.remove();
        res.json({ success: true, note: note });
    } catch (error) {
        console.log(error);
        res.json({ success: false, error: error.message });
    }
});

module.exports = router;
