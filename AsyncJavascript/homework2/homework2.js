const blogs = require('./data.json')

function listBlogs(){
    blogs.map((blog)=>{
        console.log(`Blog Title : ${blog.title}`)
        console.log(`Author : ${blog.author}`)
        console.log(`................`)
    })
}

function addBlog(newBlog,status){
    return new Promise((resolve,reject)=>{
        blogs.push(newBlog)
        
        if(status) resolve(`\nYeni blog basariyla eklendi \n`)
        else reject(`\nYeni blog eklenirken hata olustu \n`)

    })
}

async function addAndRetrieveBlogs(newBlog){
    try {
        const message = await addBlog(newBlog,true)
        console.log(message)

        listBlogs()
    } catch (error) {
        console.log(error)
    }
}

listBlogs()

addAndRetrieveBlogs({
    "id":4,
    "title":"React State nedir ? ",
    "content":"React State anlatimi",
    "author":"Sahin MARAL"
})