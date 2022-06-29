const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url
    console.log('Bir istek gonderildi')

    switch (url) {
        case '/':
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write('<h1>Anasayfa</h1>')
            res.end()
            break;
        case '/about':
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write('<h1>About sayfasi</h1>')
            res.end()
            break;
        default:
            res.writeHead(404,{'Content-Type':'text/html'})
            res.write('<h1>404 sayfa bulunamadi</h1>')
            res.end()
            break;
    }




})

const port = 3000;

server.listen(port, () => {
    console.log(`Sunucu port ${port} de başlatildi.`);
})