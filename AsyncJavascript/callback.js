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

const addBook = (newBook,cbFunc) => {
    books.push(newBook)
    cbFunc()
}

listBooks()
console.log('.............')

addBook({name:'Book4' , author : 'Writer4'},listBooks)