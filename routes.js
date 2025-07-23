const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (url === "/project") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Project page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("This page is not found");
  }
});

const port = 3001; // or try 3001

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
