const express = require('express');
const router = express.Router();
const data = require('../models/posts');
const post = data.Post;
const comment = data.Comment;


<<<<<<< HEAD
// display all posts in the main endpoint
router.get('/posts', (req,res) => {
    const allPosts = post.All;
    res.send(allPosts);
});

router.post('/posts', (req,res) => {
    const postx = req.body;
    const newPost = post.create(postx);
=======
// get all posts to show in the main endpoint
router.get('/', (req,res) => {
    const allPosts = Post.All;
    res.send(allPosts);
});
// post request
router.post('/', (req,res) => {
    const post = req.body;
    const newPost = Post.create(post);
>>>>>>> 10c7a6c67e8271e8b8e2f69148495e3270567ae6
    res.send({message: `Post number ${newPost.id} request successfully`});

});

<<<<<<< HEAD
router.get('/posts/:id', (req,res) => {
=======
router.get('/:id', (req,res) => {
>>>>>>> 10c7a6c67e8271e8b8e2f69148495e3270567ae6
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
