const moment = require('moment');
const path = require('path');

const Post = require('../models/Post');


exports.getPosts = async (req, res) => {

  const page = req.query.page || 1
  const postsPerPage = 3

  const totalPosts = await Post.find().countDocuments()
  
  let posts = await Post.find()
  .skip((page-1) * postsPerPage)
  .limit(postsPerPage)

  posts = posts.map((post) => {
    return {
      ...post._doc,
      dateCreated: moment(post._doc.dateCreated).format('DD/MM/YYYY'),
    };
  });

  res.render('index', {
    posts: posts,
    currentPage : page / 1,
    pagesCount : Math.ceil(totalPosts / postsPerPage)
  });
};

exports.getPostByID = async (req, res) => {
  const post = await Post.findById(req.params.id);

  res.render('post', {
    post: {
      ...post._doc,
      dateCreated: moment(post._doc.dateCreated).format('DD/MM/YYYY'),
    },
  });
};

exports.createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};

exports.updatePostByID = async (req,res) => {
    const post = await Post.findById(req.params.id)
    post.title = req.body.title
    post.detail = req.body.detail
    await post.save()

    res.redirect('/')
}

exports.deletePostByID = async(req,res)=>{
    const post = await Post.findById(req.params.id)
    await post.delete()

    res.redirect('/')
}