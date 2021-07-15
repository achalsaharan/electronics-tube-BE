const mongoose = require('mongoose');
require('mongoose-type-url');

const VideoSchema = new mongoose.Schema(
    {
        videoId: {
            type: String,
            required: 'Cannot enter a video without video id',
            unique: 'videoId requires to be unique',
        },

        name: {
            type: String,
            required:
                'Cannot enter a product without name, please enter product name',
        },

        thumbnailUrl: {
            type: mongoose.SchemaTypes.Url,
        },

        views: {
            type: Number,
        },

        categories: [String],
    },
    {
        timestamps: true,
    }
);

const Video = mongoose.model('Video', VideoSchema);

module.exports = { Video };
