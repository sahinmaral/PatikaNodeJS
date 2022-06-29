const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url

    switch (url) {
        case '/index':
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(`<h2> Index sayfasina hosgeldiniz </h2>`)
            res.end()
            break;
        case '/about':
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(`<h2> Hakkimda sayfasina hosgeldiniz </h2>`)
            res.end()
            break;
        case '/contact':
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(`<h2> Iletisim sayfasina hosgeldiniz </h2>`)
            res.end()
            break;
        default:
            res.writeHead(404,{'Content-Type':'text/html'})
            res.write(`<h2> 404 sayfa bulunamadi </h2>`)
            res.end()
            break;
    }
})

const port = 5000

server.listen(port, () => {
    console.log(`Sunucu port ${port} de başlatildi.`);
})

