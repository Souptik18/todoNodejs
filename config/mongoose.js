const mongoose = require('mongoose');

// acquired connection to db
const db = mongoose.connection;

// error event listener
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

// open event listener
db.once('open', function () {
  console.log('Connected to Database :: MongoDB');
});

// connected to the db
mongoose.connect('mongodb://localhost/todoNodejs', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = db;