const postsData = require('../data');

class Post{
    constructor(data){
        this.id = data.id;
        this.content = data.content;
        this.date = data.date;
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
        const newPostId = postsData.length + 1;
        const newPost = new Post({id: newPostId, ...post});
        postsData.push(newPost);
        return newPost;
    }

};

module.exports = Post;