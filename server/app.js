// import the packages necessary to run the server
const express = require('express');
const cors = require('cors');
// the body parser is needed to just to send the body at post request, now available at routes
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

// Retrieve ALL posts
const postRoutes = require('./controllers/posts');
app.use('/', postRoutes);

module.exports = app;