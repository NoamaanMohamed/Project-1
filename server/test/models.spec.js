// import data
const postsData = require('../data');
// import model
const PostAndComment = require('../models/posts');

describe('Post model', () => {
    const testPost = {
        title: 'Albus',
        age: 5,
        date: "15.12.2021",
        comments: [],
        likes1: 0,
        likes2: 0,
        likes3: 0,
        gif: ''


    };

    it('should make an instance of a post', () => {
        const post = new PostAndComment.Post({ id: 10, ...testPost });

        expect(post.id).toBe(10);
        expect(post.title).toBe('Albus');
        expect(post.body).toBe(5);
        expect(post.date).toBe("15.12.2021");
        expect(post.comments).toBe([]);
        expect(post.likes1).toBe(0);
        expect(post.likes2).toBe(0);
        expect(post.likes3).toBe(0);
        expect(post.gif).toBe('');

    });

    it('should return all posts', () => {
        const posts = PostAndComment.Post.all;

        expect(posts).toEqual(postsData.posts);
    });

    it('should return a post', () => {
        const post = PostAndComment.Post.findById(1);

        expect(post).toEqual(postsData.posts[0]);
    });

    it('should throw an error if no post', () => {
        function testError() {
            PostAndComment.Post.findById(50);
        }

        expect(testError).toThrowError('That post does not exist!');
    });

    it('should create a post', () => {
        const newPostId = postsData.posts.length + 1;
        const newPost = PostAndComment.Post.create(testPost);

        expect(newPost).toEqual({ id: newPostId, ...testPost });
    });

    // it('should delete a post', () => {
    //     const catToDestroyId = catsData.length;
    //     const catToDestroy = catsData[catToDestroyId - 1];
    //     catToDestroy.destroy();

    //     expect(catToDestroy).toEqual({ id: catToDestroyId, ...testCat });
    //     expect(catsData).not.toContain(catToDestroy);
    // });
});