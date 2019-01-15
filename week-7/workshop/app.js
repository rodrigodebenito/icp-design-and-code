// Open the workshop folder.
// Enter `npm install` to install required pakages.
// Enter `node app.js` on terminal to kick it off.
var express = require('express');
var app = express();

// Set default GET route.
// Test: `curl -X GET http://localhost:3000`
app.get('/', function (req, res) {
  res.send('Hello GET World!\n');
});

// Set default POST route.
// Test: `curl -X POST http://localhost:3000`
app.post('/', function (req, res) {
  res.send('Hello POST World!\n');
});

// Start your server on port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
