const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHeader(200, { "Content-Type": "text/html" }); // Set the header
    res.write("welcome to my homepage 1");
    res.end(); // End the response after writing
  } else if (req.url === "/about") {
    res.writeHeader(200, { "Content-Type": "text/html" }); // Set the header
    res.write("here is Zoe Nguyen");
    res.end(); // End the response after writing
  } else {
    res.writeHead(404, { "Content-Type": "text/html" }); // Set the header for 404
    res.end(`<h1>Opps</h1><p>Dont have permission to access this page</p>`); // End the response
  }
});

server.listen(5000);
