const express = require('express');
const mongoose = require('mongoose');

const path = require('path');
const ejs = require('ejs');

const Photo = require('./models/Photo');

mongoose.connect('mongodb://localhost:27017/pcat-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

// Middlewares

// const myLogger = (req,res,next) => {
//   console.log('Logged')
//   next()
// }

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// app.use(myLogger)

// Template Engines
app.set('view engine', 'ejs');

// Routing
app.get('/', async(req, res) => {
  const photos = await Photo.find()

  res.render('index',{
    photos : photos
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/photos', async (req, res) => {
  await Photo.create(req.body)
  res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App is listening on : ${port}`);
});
