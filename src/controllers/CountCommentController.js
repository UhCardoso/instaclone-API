const Comment = require('../models/Comment');

module.exports = {
    async select(req, res) {
        commentCount = await Comment.count({post: req.params.id});
        return res.send(commentCount);
    }
}