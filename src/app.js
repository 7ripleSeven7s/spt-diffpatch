import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';


const app = express();
const port = 3000;

// Define your routes here
// Respond with "Hello World!" on the homepage:
app.get('/', (req, res) => {
  res.send('Hello World!');
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
  res.send(`User ID is: ${req.params.userId}`);
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Middleware
app.use(bodyParser.json());

app.use(cookieParser());

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});