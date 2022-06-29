const fs = require('node:fs')


// Dosya Okuma

fs.readFile('./data.json', 'utf-8', 
(err, data) => {
    if (err) throw err
    console.log(data)
})


// Dosya yazma

const person = {
    'name' : 'ahmet',
    'surname' : 'maral'
}

fs.writeFile('./person.json', JSON.stringify(person), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

// Dosyaya veri ekleme

fs.appendFile('example.txt', 
"data applied", (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
});

// Dosya silme

fs.unlink('./example.txt',(err)=>{
    console.log(err)
    console.log('The file has been deleted')
})

// Klasor olusturma

fs.mkdir('./uploads/img',{'recursive':true},(err)=>{
    if(err) console.log(err)
    console.log('The folder has been created')
})

// Klasor silme

fs.rm('./uploads',{'recursive':true},(err)=>{
    if(err) console.log(err)
    console.log('The folder has been deleted')
})








