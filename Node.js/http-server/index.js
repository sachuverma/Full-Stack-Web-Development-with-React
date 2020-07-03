const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 69;

const server = http.createServer((req, res) => {
  console.log("Request for "+ req.url + " method "+ req.method);
  if(req.method == 'GET'){
    var fileUrl;
    if (req.url == '/') fileUrl = '/index.html';
    else fileUrl = req.url;

    var filePath = path.resolve('./public'+fileUrl);
    const fileExt = path.extname(filePath);
    if(fileExt == '.html'){
      fs.exists(filePath, (exists) => {
        if(!exists) {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html');
          res.end('<html><body>Error 404: '+ fileUrl +' not found</body></html>');
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          fs.createReadStream(filePath).pipe(res);
        }
      })
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end('<html><body>Error 404: '+ fileUrl +' not an html file</body></html>');
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body>Error 404:'+ req.method +' method not supported</body></html>');
  }
});

server.listen(port,hostname, ()=>{
  console.log(`Server started at http://${hostname}:${port}/`);
});