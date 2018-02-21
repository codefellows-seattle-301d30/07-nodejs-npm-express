'use strict';

// REVIEW-DONE: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

var express = require('express');
var app = express();

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

//COMMENT - WTF is going on here
// Everthing that we are sending to the front end is organized into one folder called public, because it's for the public. Express is serving the files using a .get request and responding the specified file.
app.use(express.static('./public'));

app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
});

app.get('/new',(request,response) => {
  console.log('new.html was requested');
  response.sendFile('/public/new.html',{root: '.'});
});

app.get('*', (request,response) => {
  console.log('error 404 thrown');
  response.sendFile('/public/error404.html',{root: '.'});
});

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));