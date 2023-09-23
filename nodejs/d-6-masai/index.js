const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.get("/", (req, resp) => {
  resp.send("Home page");
});
app.get("/nasa", (req, resp) => {
  console.log(req.url, req.method);
  resp.send("there is database of NASA");
}); 

app.get("/post", (req, resp) => {
  fs.readFile("./post.json", "utf-8", (err, result) => {
    if (err) console.log("error while reading post.json file ");

    resp.send(result);
  });
});

app.listen(8000, () => {
  console.log("listening ");
});
