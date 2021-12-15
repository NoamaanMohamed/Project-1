const postsData = require('../data');

class Comment{
    constructor(data){
        this.id = data.id;
        this.body = data.body;
        this.postId = data.postId;
    }

    static get All(){
        const comments = postsData.comments.map( (post) => new Comment(post.comments));
        return comments;
    }

    static findById(id){
        try{
            const commentData = postsData.comments.filter((comment) => comment.postId === Post.id)[0];
            const comment = new Comment(commentData);
            return comment;
        } catch (err) {
            throw new Error('This post does not exist.');
        }
    }
    
    static create(comment){
        const newCommentId = postsData.comments.length;
        const newComment = new Comment({id: newCommentId, ...comment});
        postsData.comments.push(newComment);
        return newComment;
    }
};

class Post{
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.body = data.body;
        this.date = data.date;
        this.comments = data.comments;
        this.likes1 = data.likes1;
        this.likes2 = data.likes2;
        this.likes3 = data.likes3;
        this.gif = data.gif;
<<<<<<< HEAD
    };
=======
    }
>>>>>>> 10c7a6c67e8271e8b8e2f69148495e3270567ae6

    static get All(){
        const posts = postsData.posts.map((post) => new Post(post));
        return posts;
    };

    static findById(id){
        try{
            const postData = postsData.posts.filter((post) => post.id === id)[0];
            const post = new Post(postData);
            return post;
        } catch (err) {
            throw new Error('This post does not exist.');
        }
    };
    
    static create(post){
<<<<<<< HEAD
        const newPostId = postsData.posts.length;
        const newPost = new Post({id: newPostId, ...post});
        postsData.posts.push(newPost);
=======
        const newPostId = postsData.length;
        const newPost = new Post({id: newPostId, date: new Date().toJSON().slice(0, 10),comments:[], likes1:"0", likes2: "0", likes3: "0", gif:"",...post});
        postsData.push(newPost);
>>>>>>> 10c7a6c67e8271e8b8e2f69148495e3270567ae6
        return newPost;
    };
};

module.exports = { Post, Comment };