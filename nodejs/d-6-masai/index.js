// const express = require("express");
// // const fs = require("fs");

// const app = express();
// // app.use(express.json());

// app.get("/", (req, resp) => {
//   resp.send("Home page");
// });
// app.get("/nasa", (req, resp) => {
//   console.log(req.url, req.method);
//   resp.send("there is database of NASA");
// });

// // app.get("/post", (req, resp) => {
// //   fs.readFile("./post.json", "utf-8", (err, result) => {
// //     if (err) console.log("error while reading post.json file ");

// //     resp.send(result);
// //   });
// // });

// app.listen(8000, () => {
//   console.log("listening ");
// });

const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  fs.readFile("post.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/welcome", (req, res) => {
  const { name, age } = req.query;
  

  const userName = name || "user";
  const userAge = age > 18 ? "elg" : "not elg";
  res.send(`welcome ! ${userName} you are ${userAge} `);
});
app.get("/lecture/:id", (req, res) => {
  const { id } = req.params;

  res.send(`welcome ! to lecture page  and params is ${id}`);
});
app.get("/lecture", (req, res) => {
  res.send(`welcome ! to lecture page `);
});

app.listen(8000, () => {
  console.log("listening");
});
