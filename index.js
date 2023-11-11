// const { log } = require('console');
const http = require('http');
const data = require("./data")

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write("<p>hello</p>");
        res.end();
    }else if(req.url === '/student'){
        // res.write("<h1>This is HTTP Produce Service Page</h1>")
        // res.end();
        const stringData = JSON.stringify(data);
        res.write(stringData);
        res.end();
    }else if(req.url === '/product'){
        res.write("<h1>This is HTTP Product Service Page</h1>")
        res.end()
    }else{
        res.write('<h2>error</h2>');
        res.end();
    }
})

server.listen(5050 , () => {
    console.log("server started");
})