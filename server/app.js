const express = require('express')
const posts = require("./models/posts")
const app = express()
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/posts', (req, res) => {
  const content = posts.date(0)
  res.send(content)}
)

module.exports = app;