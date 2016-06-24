var express = require('express');
var app = express();

var favicon = require('serve-favicon');
var serveStatic = require('serve-static');

app.set('port', (process.env.PORT || 5000));

app.use(favicon(__dirname + '/dist/favicon.ico'));
app.use(serveStatic('dist'));

app.use(function(req, res, next) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
