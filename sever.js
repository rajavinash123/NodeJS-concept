//server create kiya hai ahm ne
const http = require('http');
//reqest or response object dekhna console me 
const server = http.createServer((req, res) => {
  console.log(`Request URL: ${req.url}, Method: ${req.method}`);
//set response header
  res.writeHead(200, { "Content-Type": "text/plain" });
  //send final response
  res.end("Hello from Node.js HTTP module!");
});
// server ko ek port par listens karma
const port = 3000;

server.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});
