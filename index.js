const express = require('express');
const db = require('./config/mongoose');

const port = 8000;
const app = express();

// Set up view engine as ejs
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./assets'));

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Load express routes
app.use('/', require('./routes/index'));

// Start the server
app.listen(port, function (err) {
  if (err) {
    console.log('Error Running the Server!');
    return;
  }
  console.log('Server is up and running on port:', port);
});