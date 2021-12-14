const express = require('express');
const router = express.Router();
const Post = require('../models/posts');

// get all posts to show in its own endpoint
router.get('/posts', (req,res) => {
    const allPosts = Post.Post.All;
    res.send(allPosts);
});
// post request
router.post('/posts', (req,res) => {
    const post = req.body;
    const newPost = Post.Post.create(post);
    res.send({message: `Post number ${newPost.id} request successfully`});
});
// show a particular post using its id @/post/idNumber
router.get('/posts/:id', (req,res) => {
    try {
        const postID = parseInt(req.params.id);
        const selectedPost = Post.Post.findById(postID);
        res.send(selectedPost);
    } catch(err) {
        console.log(err);
        res.status(404).send(err);
    }
});

// get all comments to show in its own endpoint
router.get('/comments', (req,res) =>{
    const allComments = Post.Comment.All;
    res.send(allComments);
});

module.exports = router;
