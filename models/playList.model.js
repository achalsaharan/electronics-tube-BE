const mongoose = require('mongoose');

const PlayListSchema = mongoose.Schema({
    name: { type: String, required: 'enter playlist name to create play list' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    videos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }],
    visibility: String, //PUBLIC || PRIVATE
});

const PlayList = mongoose.model('PlayList', PlayListSchema);

module.exports = { PlayList };
