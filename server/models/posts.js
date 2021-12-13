const postsData = require('../data');

class Post{
    constructor(data){
        this.id = data.id;
        this.content = data.content;
        this.date = data.date;
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
};

//console.log(Post.content());

module.exports = Post;