var express = require('express');
var app = express();
var path = __dirname + '/views/';

// Requires npm install --save body-parser
var bodyParser = require('body-parser')
app.use(bodyParser());

// Set template
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.sendFile(path + 'index.html');
});

app.post('/', function (req, res) {
  res.render(path + 'response.ejs', { name : req.body.username });
  //res.send('Hello ' + req.body.username + '!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
