var express = require('express');
var favicon = require('serve-favicon');
var app = express();
const PORT = process.env.PORT || 3000;

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(function(req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Example server is up on port ' + PORT);
});
