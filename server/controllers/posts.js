const express = require('express');
const router = express.Router();
const data = require('../models/posts');
const post = data.Post;
const comment = data.Comment;


// display all posts in the main endpoint
router.get('/posts', (req,res) => {
    const allPosts = post.All;
    res.send(allPosts);
});

router.post('/posts', (req,res) => {
    const postx = req.body;
    const newPost = post.create(postx);
    res.send({message: `Post number ${newPost.id} request successfully`});
});

router.get('/posts/:id', (req,res) => {
    try {
        const postID = parseInt(req.params.id);
        const selectedPost = post.findById(postID);
        res.send(selectedPost);
    } catch(err) {
        console.log(err);
        res.status(404).send(err);
    }
});

router.get('/comments', (req,res) => {
    const allComments = comment.All;
    res.send(allComments);
});

router.post('/comments', (req,res) => {
    const commentx = req.body;
    const newComment = comment.create(commentx);
    res.send({message: `Post number ${newComment.id} request successfully`});
});

module.exports = router;
