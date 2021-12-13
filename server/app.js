const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const posts = require("./models/posts");

app.get('/', (req, res) => res.send('Hello World!'))

const postRoutes = require('./controllers/posts');
app.use('/posts', postRoutes);

module.exports = app;