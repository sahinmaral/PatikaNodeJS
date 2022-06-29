const express = require('express')

const app = express()

app.get('/',(req,res) => {
    res.status(200).send('<h2>Anasayfa</h2>')
})

app.get('/about',(req,res) => {
    res.status(200).send('<h2>Hakkinda sayfasi</h2>')
})

app.get('/contact',(req,res) => {
    res.status(200).send('<h2>Iletisim sayfasi</h2>')
})

app.get('*',(req,res) => {
    res.status(404).send('<h2>404 sayfa bulunamadi</h2>')
})

const port = 3000
app.listen(port,()=>{
    console.log(`Server listens up on ${port} port`)
})