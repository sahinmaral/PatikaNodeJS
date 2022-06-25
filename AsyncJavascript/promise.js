const promise1 = new Promise((resolve,reject) => {
    resolve('Veriler alindi')
    reject('Baglanti hatasi')
})

// promise1
//     .then(value => {
//         console.log(value)
//     }).catch(err => {
//         console.log(err)
//     })

const books = [
    {name:'Book1' , author : 'Writer1'},
    {name:'Book2' , author : 'Writer2'},
    {name:'Book3' , author : 'Writer3'}
]

const listBooks = () => {
    books.map((book)=> {
        console.log(book.name)
    })
}

const addBook = (newBook) => {
    const promise1 = new Promise((resolve,reject)=> {
        books.push(newBook)
        resolve()
        //reject('Bir hata olustu')
    })
    
    return promise1
}

addBook({name:'Book4' , author : 'Writer4'})
    .then(() => {
        console.log('Yeni liste')
        listBooks()
    }).catch((err) => {
        console.log(err)
    })
