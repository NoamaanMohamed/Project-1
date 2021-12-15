const express = require('express');
const router = express.Router();
const Post = require('../models/posts');

// get all posts to show in the main endpoint
router.get('/', (req,res) => {
    const allPosts = Post.All;
    res.send(allPosts);
});
// post request
router.post('/', (req,res) => {
    const post = req.body;
    const newPost = Post.create(post);
    res.send({message: `Post number ${newPost.id} request successfully`});

});

router.get('/:id', (req,res) => {
    try {
        const postID = parseInt(req.params.id);
        const selectedPost = Post.findById(postID);
        res.send(selectedPost);
    } catch(err) {
        console.log(err);
        res.status(404).send(err);
    }
});

module.exports = router;
