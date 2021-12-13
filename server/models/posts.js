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

    static content(num){
        //first map the post
        const posts = postsData.map((data) => new Post(data));
        return posts[num].content; // retrieve the content of the index specified
    }

    static date(num){
    //first map the post
    const posts = postsData.map((data) => new Post(data));
    return posts[num].date; // retrieve the content of the index specified
    }

    static create(post){
        const newPostId = postsData.length + 1;
        const newPost = new Post({id: newPostId, ...post});
        postsData.push(newPost);
        return newPost;
    }

};

//console.log(Post.content());

module.exports = Post;