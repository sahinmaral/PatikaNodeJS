const express = require('express');
const path = require('path')
const ejs = require('ejs');

const app = express();

// Middlewares

// const myLogger = (req,res,next) => {
//   console.log('Logged')
//   next()
// }

app.use(express.static('public'))
// app.use(myLogger)

// Template Engines
app.set("view engine", "ejs");

// Routing
app.get('/', (req, res) => {
  res.render('index')
});

app.get('/about', (req, res) => {
  res.render('about')
});

app.get('/add', (req, res) => {
  res.render('add')
});

const port = 3000;
app.listen(port, () => {
  console.log(`App is listening on : ${port}`);
});
