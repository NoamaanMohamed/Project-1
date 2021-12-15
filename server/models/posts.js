const Data = require('../data');

class Comment{
    constructor(data){
        this.id = data.id;
        this.comment = data.comment;
        this.postId = data.postId;
    };

    static get All(){
        const comments = Data.comments.map((comment) => new Comment(comment));
        return comments;
    };

    static findById(id){
        try{ 
            const commentData = Data.comments.filter((comment) => comment.id === id)[0];
            const comment = new Comment(commentData);
            return comment;
        } catch (err) {
            throw new Error('This comment does not exist.');
        };
    };

    static findByPostId(id){
      
            const commentData = [];
            for(let i=0;i<Data.comments.length;i++){
                if(Data.comments[i].postId == id){
                    commentData.push(Data.comments[i]);
                }
            };
            return commentData;
        
    };

    static createComment(comment){
        const listId = Data.comments.length;
        const newList = new Comment({id: listId, comment: "", postId: 0, ...comment});
        Data.comments.push(newList);
        return newList;
    };

};

class Post{
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.body = data.body;
        this.date = data.date;
        this.likes1 = data.likes1;
        this.likes2 = data.likes2;
        this.likes3 = data.likes3;
        this.gif = data.gif
    };

    static get All(){
        const posts = Data.posts.map((post) => new Post(post));
        return posts;
    };

    static findById(id){
        try{
            const postData = Data.posts.filter((post) => post.id === id)[0];
            const post = new Post(postData);
            return post;
        } catch (err) {
            throw new Error('This post does not exist.');
        }
    };
    
    static create(post){
        const newPostId = Data.posts.length;
        const newPost = new Post({id: newPostId, title: '', body:'', date: new Date().toUTCString(), likes1: "0", likes2: "0", likes3: "0", gif: "", ...post});
        Data.posts.push(newPost);
        return newPost;
    };
};

module.exports = { Post, Comment };
