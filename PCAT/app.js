const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

var methodOverride = require('method-override');

const path = require('path');
const ejs = require('ejs');


const photoController = require('./controllers/photoController');
const pageController = require('./controllers/pageController');

mongoose.connect('mongodb://localhost:27017/pcat-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

// Template Engines
app.set('view engine', 'ejs');

// Routing

app.get('/', photoController.getAllPhotos);
app.post('/photos', photoController.createPhoto);
app.get('/photos/:id', photoController.getPhotoByID);
app.put('/photos/:id', photoController.updatePhotoByID);
app.delete('/photos/:id', photoController.deletePhotoByID);

app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPhotoPage);
app.get('/photos/edit/:id', pageController.getEditPhotoPage);

const port = 3000;
app.listen(port, () => {
  console.log(`App is listening on : ${port}`);
});
