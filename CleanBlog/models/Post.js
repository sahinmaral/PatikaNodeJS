const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PostSchema = new Schema({
    title:String,
    detail:String,
    dateCreated:{
        type:Date,
        default:Date.now()
    }
})

const Post = mongoose.model('posts',PostSchema)

module.exports = Post 