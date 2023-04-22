const http = require('http');

const server = http.createServer(async (req, res) => {
    if(req.method === 'GET' && req.url === '/') {
        res.end();
    }
})

server.listen(3001, () => {
    console.log('Server: 3001')
})