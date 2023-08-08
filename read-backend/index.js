var http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/read-file") {
    const filePath = path.join(__dirname, "read.txt"); // Change this to the path of your file
    // console.log(filePath,'filePath')
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Not Found");
  }
});

const PORT = 4000; // Change this to your desired port number
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});