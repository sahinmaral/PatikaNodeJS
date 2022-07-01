const Post = require('../models/Post');

exports.getAboutPage = (req, res) => {
  res.render('about');
};

exports.getAddPostPage = (req, res) => {
  res.render('add_post');
};

exports.getEditPostPage = async (req, res) => {
  const post = await Post.findOne({$id : req.params.id})

  res.render('edit_post', {
    post: post,
  });
};
