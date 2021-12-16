// import data
const postsData = require('../data');
// import model
const PostAndComment = require('../models/posts');


describe('Post model', () => {
    const testPost = {
        id: 10,
        title: 'Albus',
        body: 5,
        date: "15.12.2021",
        likes1: 0,
        likes2: 0,
        likes3: 0,
        gif: ''
    };

    const testComment = {
        id: 2,
        comment: "message for the second post",
        postId: 1
    }
//posts test
    it('should make an instance of a post', () => {
        const post = new PostAndComment.Post({...testPost });

        expect(post.id).toBe(10);
        expect(post.title).toBe('Albus');
        expect(post.body).toBe(5);
        expect(post.date).toBe("15.12.2021");
        expect(post.likes1).toBe(0);
        expect(post.likes2).toBe(0);
        expect(post.likes3).toBe(0);
        expect(post.gif).toBe('');
    });

    it('should return all posts', () => {
        const posts = PostAndComment.Post.all;     
        expect(posts).toEqual(postsData.posts.posts);
    });

    it('should return a post', () => {
        const post = PostAndComment.Post.findById(0);
        expect(post).toEqual(postsData.posts[0]);
    });

    it('should throw an error if no post', () => {
        function testError() {
            PostAndComment.Post.findById(50);
        }
        expect(testError).toThrowError('This post does not exist.');
    });

    it('should create a post', () => {
        const newPost = PostAndComment.Post.create(testPost);
        expect(newPost).toEqual({...testPost });
    });

//comments test


    it('should make an instance of a Comment', () => {
        const comment = new PostAndComment.Comment({...testComment });

        expect(comment.id).toBe(2);
        expect(comment.comment).toBe('message for the second post'); 
        expect(comment.postId).toBe(1);
    });

    it('should return all comments', () => {
        const comments = PostAndComment.Comment.all;     
        expect(comments).toEqual(postsData.comments.comments);
    });

    it('should return a comment', () => {
        const comment = PostAndComment.Comment.findById(0);
        expect(comment).toEqual(postsData.comments[0]);
    });

    it('should throw an error if no comment', () => {
        function testError() {
            PostAndComment.Comment.findById(50);
        }
        expect(testError).toThrowError('This comment does not exist.');
    });

    it('should create a post', () => {
        const newComment = PostAndComment.Comment.createComment(testComment);
        expect(newComment).toEqual({...testComment });
    });
});