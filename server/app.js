const express = require('express');
const bodyParser = require('body-parser');
const posts = require("./models/posts");
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/posts', (req, res) => {
  //const date = posts.date(0) gets the date
  //const content = posts.content(0) gets the content of the post
  res.send(posts.All); // shows all the posts and their information
});

app.use(bodyParser.json());

// this will allow us to create an addition to the post
app.post('/posts', (req,res) =>{
  const post = req.body;
  const newPost = posts.create(post)
  res.send({message: 'New post successfully added'});
})

module.exports = app;