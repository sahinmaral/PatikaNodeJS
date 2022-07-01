const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const { v4: uuidv4 } = require('uuid');

const path = require('path');
const ejs = require('ejs');
const fs = require('node:fs')

const Photo = require('./models/Photo');

mongoose.connect('mongodb://localhost:27017/pcat-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(fileUpload());    
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


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

  const uploadDir = 'public/uploads'
  if (!fs.existsSync(uploadDir)) { 
    fs.mkdirSync(uploadDir);
  }

  let uploadeImage = req.files.image;

  var ext = uploadeImage.name.split('.');
  const imageName = uuidv4() + '.' + ext[ext.length - 1]

  let uploadPath = __dirname + '/public/uploads/' + imageName;
  uploadeImage.mv(uploadPath,async(err)=> {
      await Photo.create({
        ...req.body,
        image : '/uploads/' + imageName,
      })
  })

  res.redirect('/');
});

app.get('/photos/:id', async(req, res) => {
  const photo = await Photo.findById(req.params.id)
  res.render('photo',{
    photo : photo
  })
});

const port = 3000;
app.listen(port, () => {
  console.log(`App is listening on : ${port}`);
});
