const express = require('express');
const router = express.Router();
const Post = require('../models/posts');

// display all posts in the main endpoint
router.get('/', (req,res) => {
    const allPosts = Post.All;
    res.send(allPosts);
});

router.post('/', (req,res) => {
    const post = req.body;
    const newPost = Post.create(post);
    res.send({message: 'Post request successfully'});
});

module.exports = router;
