const Comment = require('../models/Comment');

 module.exports = {
    async index(req, res) {
        const id = req.params.id;

        commentBD = await Comment.find({post: id});
        
        return res.send(commentBD);
    },

    async store(req, res) {
        const id = req.params.id;
        const {author, comment} = req.body;
        const commentBD = await Comment.create({
            post: id,
            author,
            comment
        });

        await commentBD.save();

        req.io.emit('comment', commentBD);
    }
 }