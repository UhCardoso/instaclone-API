const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        require: true
    },
    author: {
        type: String,
        require: true
    },
    comment: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', CommentSchema);