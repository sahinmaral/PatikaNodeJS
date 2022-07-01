const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const Photo = require('../models/Photo');

exports.getAllPhotos = async (req, res) => {
  const page = req.query.page || 1
  const photosPerPage = 3

  const totalPhotos = await Photo.find().countDocuments()
  
  const photos = await Photo.find()
  .sort('-dateCreated')
  .skip((page-1) * photosPerPage)
  .limit(photosPerPage)

  res.render('index', {
    photos: photos,
    currentPage : page / 1,
    pagesCount : Math.ceil(totalPhotos / photosPerPage)
  });
};

exports.getPhotoByID = async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  res.render('photo', {
    photo: photo,
  });
};

exports.createPhoto = async (req, res) => {
  const uploadDir = 'public/uploads';
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadeImage = req.files.image;

  var ext = uploadeImage.name.split('.');
  const imageName = uuidv4() + '.' + ext[ext.length - 1];

  let uploadPath = __dirname + '/../public/uploads/' + imageName;
  uploadeImage.mv(uploadPath, async (err) => {
    await Photo.create({
      ...req.body,
      image: '/uploads/' + imageName,
    });
  });

  res.redirect('/');
};

exports.updatePhotoByID = async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  photo.title = req.body.title;
  photo.description = req.body.description;
  await photo.save();
  res.render('index');
};

exports.deletePhotoByID = async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  let deletedImage = __dirname + '/../public' + photo.image;
  fs.unlinkSync(deletedImage);
  await photo.delete();

  res.redirect('/');
};
