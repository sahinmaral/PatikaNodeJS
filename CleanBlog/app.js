const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
require('dotenv').config();

const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');

mongoose.connect(`mongodb+srv://${process.env.MONGODB_ATLAS_USERNAME}:${process.env.MONGODB_ATLAS_PASSWORD}@cluster0.qfzu5za.mongodb.net/cleanblog-db?retryWrites=true&w=majority`);

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method',{
  methods:['GET','POST']
}))

// PostController

app.get('/', postController.getPosts);
app.post('/posts', postController.createPost);
app.put('/posts/:id', postController.updatePostByID);
app.delete('/posts/:id', postController.deletePostByID);
app.get('/posts/:id', postController.getPostByID);


// PageController

app.get('/posts/edit/:id',pageController.getEditPostPage)
app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPostPage);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is listening on : ${port}`);
});
