const express = require('express')
const quotes = require("./data")
const app = express()
const cors = require('cors');

function getRandomResult() {
  let r = results[Math.floor(Math.random()*results.length)]
  return r.title + "<br>" + r.url;
}


app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/results', (req, res) => res.send(results))

app.get('/random', (req, res) => res.send(getRandomResult()))

module.exports = app;