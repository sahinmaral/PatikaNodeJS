const express = require('express')
const mongoose = require('mongoose')

const path = require('path')

const Post = require('./models/Post')

mongoose.connect('mongodb://localhost:27017/cleanblog-db')

const app = express()

app.set('view engine','ejs')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/',async(req,res)=>{

    const posts = await Post.find()

    'asdasd'.substring(0,30)

    res.render('index',{
        posts:posts
    })
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/add_post',(req,res)=>{
    res.render('add_post')
})

app.post('/posts',async(req,res)=>{
    await Post.create(req.body)
    res.redirect('/')
})

const port = 4001
app.listen(port,()=>{
    console.log(`App is listening on : ${port}`)
})

