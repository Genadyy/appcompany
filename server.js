const http = require("http");

/*const server = http.createServer();

server.on("request", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Basis of Node.js");
});

server.listen(3000, () => console.log("server is working"));

 console.log(req.url);
    console.log(req.method);
    console.log(req.headers);

http
  .createServer((req, res) => {   
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is new type of old server");
  })
  .listen(3000, () => console.log("Server is working again"));*/

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <!doctype>
        <html>
            <head>
                <meta charset="utf-8">
                <title>Basis of Node.js</title>
            </head>
            

            <body>
                <h1>Basis of Node.js </h1>
            </body>
        </html>
    `);
  })
  .listen(3333, () => console.log("New server is working "));
