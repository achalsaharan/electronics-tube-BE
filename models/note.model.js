const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    video: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
    heading: { type: String },
    content: { type: String },
});

const Note = mongoose.model('Note', NoteSchema);

module.exports = { Note };
