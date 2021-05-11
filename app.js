var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello Cloud Gladiators"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello Cloud Gladiators!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
