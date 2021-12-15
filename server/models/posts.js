const postsData = require('../data');

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
    }

    static get All(){
        const posts = postsData.map((post) => new Post(post));
        return posts;
    }

    static findById(id){
        try{
            const postData = postsData.filter((post) => post.id === id)[0];
            const post = new Post(postData);
            return post;
        } catch (err) {
            throw new Error('This post does not exist.');
        }
    }
    
    static create(post){
        const newPostId = postsData.length;
        const newPost = new Post({id: newPostId, date: new Date().toJSON().slice(0, 10),comments:[], likes1:"0", likes2: "0", likes3: "0", gif:"",...post});
        postsData.push(newPost);
        return newPost;
    }

};

module.exports = Post;