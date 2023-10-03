const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf8'); // Read the HTML file as a string
const data = JSON.parse(fs.readFileSync('data.json', 'utf8')); // Read the JSON file as a string and parse it

const port = 8000;

const product = data.products[5];

const server = http.createServer((req, res) => {
    console.log(req.url);
    
    switch (req.url) {
        case '/':
            res.setHeader('Content-Type', 'text/html');
            res.end(index);
            break;
        case '/api':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
            break;
        case '/product':
            res.setHeader('Content-Type', 'text/html');
            const modifiedHtml = index.replace('<h5 class="card-title">**Card-title**</h5>', `<h5 class="card-title">${product.title}</h5>`).replace('<img src="https://placehold.co/600x400/orange/white" class="card-img-top" alt="...">' , `<img src=${product.thumbnail} class="card-img-top" alt="...">`).replace('<p class="card-text">**price**</p>' ,`<p class="card-text">$${product.price}</p>`).replace(`<p class="card-text">**description**</p>`,`<p class="card-text">${product.description}</p>`);
            res.end(modifiedHtml);
            break;
        default:
            res.writeHead(404);
            res.end('<h1>Not Found</h1>');
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
