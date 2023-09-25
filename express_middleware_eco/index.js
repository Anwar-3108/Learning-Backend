const express = require("express");
const app = express();
const port = 8000;



// this is the time middleware//

const timer = (req, res, next) => {
  const start = Date.now();
  next();
  const timeTook = Date.now() - start;
  console.log(`it took ${timeTook} ms`);
};

app.use(timer);

// app.use((req, res, next) => {
//   console.log("my first middleware");
//   console.log("m");
//   next();
//   console.log('f');
// });

app.get("/", (req, res) => {
  res.send("home routes....");
  console.log("y");
});

app.get("/details", (req, res) => {
  res.send("details routes....");
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
