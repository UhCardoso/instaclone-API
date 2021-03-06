const Post = require("../models/Post");
const Comment = require('../models/Comment');
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

module.exports = {
    async select(req, res) {
        const post = await Post.findById(req.params.id);

        return res.send(post);
    },

    async index(req, res) {
        const posts = await Post.find().sort("-createdAt");

        return res.json(posts);
    },

    async store(req, res) {
        const {author, place, description, hashtags} = req.body;
        const {filename: image} = req.file;

        const [name] = image.split('.');
        const filename = `${name}.jpg`;

        await sharp(req.file.path)
            .resize(500)
            .jpeg({quality: 70})
            .toFile(
                path.resolve(req.file.destination, 'resized', filename)
            )
        fs.unlinkSync(req.file.path);

        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image:filename 
        })

        req.io.emit('post', post);

        return res.json(post);
    }
};