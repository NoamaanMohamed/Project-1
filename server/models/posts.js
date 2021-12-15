const postsData = require('../data');

class Comment{
    constructor(data){
        this.id = data.id;
        this.commentList = data.commentList;
    };

    static get All(){
        const comments = postsData.comments.map((comment) => new Comment(comment));
        return comments;
    };

    static createCommentList(comment){
        const listId = postsData.comments.length;
        const newList = new Comment({id: listId, commentList: [], ...comment});
        postsData.comments.push(newList);
        return newList;
    };
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
    };

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
        };
    };
    
    static create(post){
        const newPostId = postsData.posts.length;
        const newPost = new Post({id: newPostId, title: '', body:'', date: new Date().toUTCString(), comments:[], likes1:"", likes2: "", likes3: "", ...post});
        postsData.posts.push(newPost);
        console.log(newPost);
        return newPost;
    };

};

module.exports = {Post, Comment};