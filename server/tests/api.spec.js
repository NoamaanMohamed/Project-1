const request = require('supertest');

const server = require('../app.js');

describe('API server', () => {
    let api;
    let post = {
      id: 8,
      title: "Day8",
      body:  "8Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae,",
      date:  "02.01.2021",
      comments: [],
      likes1: "1",
      likes2: "2",
      likes3: "3",
      gif: ""
    }

    let comment = {
        id: 5,
        comment: "meesageasjdaksdk",
        postId: 0
    }



    beforeAll(() => {
        api=server.listen(5000, () => 
        console.log('Test server running on port 5000')
        );
    });

    afterAll((done) => {
        // close the server, then run done
        console.log('Gracefully stopping test server');
        api.close(done);
    });


    //posts test

    it('responds to get / with status 200', (done) => {
        request(api).get('/').expect(200, done);
    });

    it('responds to get /posts with status 200', (done) => {
        request(api).get('/posts').expect(200, done);
    });

    it('responds to post /posts with status 201', (done) => {
        request(api)
            .post('/posts')
            .send(post)
            .set('Accept', /application\/json/)
            .expect({message: `Post number ${post.id} request successfully`}, done);
    });

    it('responds to get /posts/200 with status 404', (done) => {
        request(api).get('/posts/200').expect(404, done);
    });

    it('retrieves a post by id', (done) => {
        request(api)
            .get('/posts/3')
            .expect(200)
            .expect({ id: 3,
                title: "Day 4",
                body:  "4Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                date:  "02.01.2021",
                likes1: "2",
                likes2: "3",
                likes3: "0",
                gif: "https://media2.giphy.com/media/dsiv65A5ZSo7YXo8cH/giphy-downsized.gif?cid=9dc9e58e9suovuvu29aceyfk4ayb76xa7tab7ubqudg3s6ll&rid=giphy-downsized.gif&ct=g" }, done);
    });

    it('responds to non existing paths with 404', (done) => {
        request(api).get('/no').expect(404, done);
    });

    //comments test

    it('responds to get /comments with status 200', (done) => {
        request(api).get('/comments').expect(200, done);
    });

    it('responds to post /comments with status 201', (done) => {
        request(api)
            .post('/comments')
            .send(comment)
            .set('Accept', /application\/json/)
            .expect({message: `Comment list number ${comment.id} created successfully`}, done);
    });

    it('responds to get /comments/200 with status 500', (done) => {
        request(api).get('/comments/200').expect(500, done);
    });

    it('responds to get /posts/:id/comments with status 200', (done) => {
        request(api).get('/posts/0/comments').expect(200, done);
    });

    it('retrieves a comment by id', (done) => {
        request(api)
            .get('/comments/0')
            .expect(200)
            .expect({ id: 0,
                comment: "meesageasjdaksdk",
                postId: 0 }, done);
    });

});
