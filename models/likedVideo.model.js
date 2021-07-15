const mongoose = require('mongoose');

const LikedVideoSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    videos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }],
});

const LikedVideo = mongoose.model('LikedVideo', LikedVideoSchema);

module.exports = { LikedVideo };
