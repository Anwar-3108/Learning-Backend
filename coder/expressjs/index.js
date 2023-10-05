const express = require("express");
const server = express();
const productRouter= require('./routes/product')

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

server.use('/api/v1', productRouter.router)


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

// server.get("/", (req, res) => {
//   res.json({ type: "GET" });
// });
// READ GET /products

// READ GET /products/:id

// server.post("/", (req, res) => {
//   res.json({ type: "POST" });
// });

//create POST /products

// server.post("/", (req, res) => {
//   res.json({ type: "POST" });
// });



server.get("/demo", (req, res) => {
  res.json(products);
  // res.sendStatus(200)
  // res.send('hello world')
  // res.sendFile('E:/Learning-Backend/coder/expressjs/index.html')
});

server.listen(8080, () => {
  console.log("server listening on port 8080");
});
