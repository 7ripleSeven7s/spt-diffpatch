import express from 'express';
import fs from 'node:fs';


const app = express();
const port = 3000;

/*
  app.get('/', (req, res) => {});
  app.post('/', (req, res) => {});
  app.put('/', (req, res) => {});
  app.delete('/', (req, res) => {});
*/


// resource paths
const appPath = "/c/Users/Oliver/Dev/src/web/spt-diffpatch";
const appName = "spt-diffpatch";
const appDir = "src/";

const userHome = process.env.HOME;


// Define your routes here
app.get('/', (req, res) => {
  res.setHeader('Foo', 'bar');
  res.appendHeader('Set-Cookie', ['foo=bar', 'bar=baz']);
  const headers = res.getHeaders();
  const typeHeader = req.get('content-type');
  res.type('text/plain')
  res.status(200);
  res.send('Hello World!');
  //res.type('application/json');
});

// Respond to a POST request on the root route ('/'), the application’s home page:
app.post('/', (req, res) => {
  res.send('Got a POST request');
});

// Respond to a PUT request to the '/user' route:
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});

// Respond to a DELETE request to the '/user' route:
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user');
});

// Respond to a GET request to the /user/:id route:
app.get('/users/:userId', (req, res) => {
  if (fs.existsSync('path/to/file')) {
    res.send(`User ID is: ${req.params.userId}`);
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/* app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}); */