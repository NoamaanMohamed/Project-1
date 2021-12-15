// import data
const postsData = require('../data');
// import model
const Post = require('../models/posts');

describe('Post model', () => {
    const testPost = {
        id: 10,
        title: 'Albus',
        body: 5,
        date: "15.12.2021",
        comments: [],
        likes1: 0,
        likes2: 0,
        likes3: 0,
        gif: ''


    };

    it('should make an instance of a post', () => {
        const post = new Post({ id: 10, ...testPost });

        expect(post.id).toBe(10);
        expect(post.title).toBe('Albus');
        expect(post.body).toBe(5);
        expect(post.date).toBe("15.12.2021");
        expect(post.comments).toEqual([]);
        expect(post.likes1).toBe(0);
        expect(post.likes2).toBe(0);
        expect(post.likes3).toBe(0);
        expect(post.gif).toBe('');

    });

    it('should return all posts', () => {
        const posts = Post.all;

        expect(posts).toEqual(postsData.posts);
    });

    it('should return a post', () => {
        const post = Post.findById(0);

        expect(post).toEqual(postsData[0]);
    });

    it('should throw an error if no post', () => {
        function testError() {
            Post.findById(50);
        }

        expect(testError).toThrowError('This post does not exist.');
    });

    it('should create a post', () => {
       
        const newPost = Post.create(testPost);

        expect(newPost).toEqual({...testPost });
    });

    
});