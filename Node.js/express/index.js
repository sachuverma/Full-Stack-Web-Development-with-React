const express = require('express'),
  http = require('http'),
  bodyParser = require('body-parser'),
  morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.all('/dishes', (req, res, next) => {
  res.statusCode=200;
  res.setHeader('Content-Type','text/plain');
  next();
});

app.get('/dishes', (req, res, next) => {
  res.end('Will send all the dishes to you!');
});

app.post((req, res, next) => {
  res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
app.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /dishes');
})
app.delete((req, res, next) => {
  res.end('Deleting all dishes');
});

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>Error: 404 URL NOT FOUND <br>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});