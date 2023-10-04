const fs = require("fs");
// const http = require('http');

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");

const server = express();
server.use(express.json());

server.use((req, res, next) => {
  console.log(
    req.method,
    req.ip,
    new Date(),
    req.header,
    req.hostname,
    req.get("User-Agent")
  );
  next();
});




/*
const auth = (req, res, next) => {
//   console.log(req.query);
  if (req.body.password === "123") {
    next();
  } else {
    res.sendStatus(401);
  }
};
// server.use(auth);

// API - Endpoint

server.get("/", auth, (req, res) => {
  res.json({ type: "GET" });
});

server.post("/", auth, (req, res) => {
  res.json({ type: "POST" });
});
*/




server.get("/", (req, res) => {
  res.json({type:'GET'});
});
// READ GET /products

server.get("/products", (req, res) => {
  res.json(products);
});

// READ GET /products/:id
server.get("/products/:id", (req, res) => {
  const id = +req.params.id;
 const product= products.find(p=>p.id===id)
  res.json(product);
});

server.post("/", (req, res) => {
  res.json({ type: "POST" });
});



//create POST /products
server.post("/products", (req, res) => {
  products.push(req.body)
  console.log(req.body)
  res.json({ type: "POST" });
});
server.post("/", (req, res) => {
  res.json({ type: "POST" });
});

server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});

server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

server.get("/demo", (req, res) => {
  res.json(products);
  // res.sendStatus(200)
  // res.send('hello world')
  // res.sendFile('E:/Learning-Backend/coder/expressjs/index.html')
});

server.listen(8080, () => {
  console.log("server listening on port 8080");
});
