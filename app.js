const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
    res.end('Welcome to our web page')
    }
    else if(req.url === '/about'){
        res.end('This is about page')
    }else{
    res.end(`
    <h1>This is not the page u r looking for<h1>
    <a href="/">Go back home</a>`)
    }
})

server.listen(5000)