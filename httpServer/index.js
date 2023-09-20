//The http.createServer() method includes request and response parameters.
//the request object can be used to get information  about the current http request 
//e.g url request header and data.
// the response object can be used to send a response for a current http request .
// if the response from the http server is supposed to be displayed as html
//you should include an http header with the correct content type.

// ======================================================//

const http = require('http') ;
const server = http.createServer((req,res)=>{

    console.log(req.url);
    res.writeHead(404,{'content-type':'text/html'})
    res.end(`hello from the ${req.url} side `) ;
})



server.listen(8000,()=>{
    console.log('listening on port 8000');
})

