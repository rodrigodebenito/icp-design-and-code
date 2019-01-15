// Open the workshop folder in terminal
// Enter `npm init` and follow the prompt instructions there to create the package.json file (most fields are optional).
// Enter `npm install express` to install the express module. 
// Express lets you create a web server using node. More information at https://expressjs.com/
var express = require('express');
var myapp = express();

// Set a default GET route.
// Test: Enter `curl -X GET http://localhost:3000` in terminal, or in your browser (http://localhost:3000 in the URL bar).
myapp.get('/', function (request, response) {
  response.send('Hello GET World!');
});

// Set a default POST route.
// Test: Enter `curl -X POST http://localhost:3000` in terminal, or through a form (not available through the URL bar).
myapp.post('/', function (request, response) {
  response.send('Hello POST World!');
});

// Start your server on port 3000.
myapp.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// Enter `node app.js` to kick it off.
