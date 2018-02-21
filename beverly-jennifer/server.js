'use strict';

const express = require('express');
const app = express();
// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
// COMMENT: We have a public directory to organize the files that will be served to the "view". ExpressJS serves our local files by looking for them in the public folder and sends them to the "view".

app.get('/new', (request, response) => {
  response.sendFile('public/new.html',{root:'.'});
});

app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
});

app.use(function (error, request, response, next) {
  response.status(404).send('404 - Something\'s broken!');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));