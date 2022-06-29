const fs = require('node:fs')

const data = '{"name": "Employee 1 Name", "salary": 2000}'
const data2 = '{"name": "Employee 2 Name", "salary": 2000}'

async function appendFile(path,data){
    fs.appendFile(path,data,(err)=>{
        if(err) throw err
        console.log('Data has been appended to the file')
    })
}

async function readFile(path){
    fs.readFile(path,'utf-8',(err,data)=>{
        if(err) throw err
        console.log(data)
    })
}

async function writeFile(path,data){
    fs.writeFile(path,data,(err)=>{
        if(err) throw err
        console.log('Data has been written to the file')
    })
}

async function deleteFile(path){
    fs.rm(path,(err)=>{
        if(err) throw err
        console.log('The file has been deleted')
    })
}

//appendFile('./employees.json',data2)
// readFile('./employees.json')
//writeFile('./employees.json',data2)
deleteFile('./employees.json')