const express = require('express')
const path = require('path')

const app = express()

app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/add_post',(req,res)=>{
    res.render('add_post')
})


// app.get('/',(req,res)=>{
//     res.send(blog)
// })

const port = 4001
app.listen(port,()=>{
    console.log(`App is listening on : ${port}`)
})

