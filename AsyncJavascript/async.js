function getData(data) {
    return new Promise((resolve, reject) => {
        console.log('Veriler alinmaya calisiliyor..')

        if (data)
            resolve('Veriler alindi')
        else
            reject('Veriler alinamadi')
    })
}

function cleanData(receivedData) {
    return new Promise((resolve, reject) => {
        console.log('Veriler duzenleniyor..')

        if (receivedData)
            resolve('Veriler duzenlendi')
        else
            reject('Veriler duzenlenemedi')
    })
}


// getData(true)
//     .then(result => {
//         console.log(result)
//         return cleanData(true)
//     }).then(result => {
//         console.log(result)
//     }).catch(err => {
//         console.log(err)
//     })

async function processData() {
    try {

        const receivedData = await getData(true)
        console.log(receivedData)
        const cleanedData = await cleanData(false)
        console.log(cleanedData)

    } catch (error) {
        console.log(error)
    }

}

processData()

const books = [
    { name: 'Book1', author: 'Writer1' },
    { name: 'Book2', author: 'Writer2' },
    { name: 'Book3', author: 'Writer3' }
]

const listBooks = () => {
    books.map((book) => {
        console.log(book.name)
    })
}

const addBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook)
        //resolve()
        reject('Bir hata olustu')
    })

    return promise1
}

// addBook({ name: 'Book4', author: 'Writer4' })
//     .then(() => {
//         console.log('Yeni liste')
//         listBooks()
//     }).catch((err) => {
//         console.log(err)
//     })

async function showBooks(){
    try {
        await addBook({ name: 'Book4', author: 'Writer4' })
        listBooks()
    } catch (error) {
        console.log(error)
    }   
}


showBooks()
