const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
require('dotenv').config();

var methodOverride = require('method-override');

const path = require('path');
const ejs = require('ejs');

const photoController = require('./controllers/photoController');
const pageController = require('./controllers/pageController');

mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_ATLAS_USERNAME}:${process.env.MONGODB_ATLAS_PASSWORD}@cluster0.modzxda.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

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

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is listening on : ${port}`);
});
