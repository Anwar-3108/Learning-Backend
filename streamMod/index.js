var fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {


//1st way
// server.on("request", (req, res) => {
//   fs.readFile("input.txt", "utf8", (err, code) => {
//     if (err) return console.log(err);
//     res.end(code);
//   });

//2nd way






    const rstream = fs.createReadStream("input.txt");
  rstream.on("data", (chunk) => {
    res.write(chunk);
  });

  rstream.on("end", () => {
    res.end();
  });

  rstream.on("error", () => {
    res.end("file not found");
  });
});


server.listen(8000, () => {
  console.log("Server is running");
});
