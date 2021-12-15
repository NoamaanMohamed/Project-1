const express = require('express');
const router = express.Router();
const Data = require('../models/posts');

// get all posts to show in its own endpoint
router.get('/posts', (req,res) => {
    const allPosts = Data.Post.All;
    res.send(allPosts);
});
// post request
router.post('/posts', (req,res) => {
    const post = req.body;
    const newPost = Data.Post.create(post);
    res.send({message: `Post number ${newPost.id} request successfully`});
});

// show a particular post using its id @/post/idNumber
router.get('/posts/:id', (req,res) => {
    try {
        const postID = parseInt(req.params.id);
        const selectedPost = Data.Post.findById(postID);

        res.send(selectedPost);
    } catch(err) {
        console.log(err);
        res.status(404).send(err);
    }
});

// get all comments to show in its own endpoint
router.get('/comments', (req,res) =>{
    const allComments = Data.Comment.All;
    res.send(allComments);
});

// create a new comment
router.post('/comments', (req,res) => {
    const comment = req.body;
    const newComment = Data.Comment.createCommentList(comment);
    res.send({message: `Comment list number ${newComment.id} created successfully`});
});

module.exports = router;
