const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const PostController = require("./controllers/PostController");
const LikeController = require("./controllers/LikeController");
const CommentController = require('./controllers/CommentController');
const CountComment = require('./controllers/CountCommentController'); 

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/', (req, res) => {
    return res.json({running: 'ok'});
});

routes.get('/posts/:id/count', CountComment.select);
routes.get('/posts/:id', PostController.select);
routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);

routes.post('/posts/:id/like', LikeController.store);

routes.get('/posts/:id/comment', CommentController.index); 
routes.post('/posts/:id/comment', CommentController.store);
module.exports = routes;