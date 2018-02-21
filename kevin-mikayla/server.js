'use strict';

const express = require('express');
const app = express();

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

// Express needs to know what files its serving so we give it the public directory. The public directory need not be named that but it is a good way to organize our files.
app.use(express.static('./public'));

app.get('/new', (request, response) => {
  console.log('new request');
  response.sendFile('/public/new.html', {root: '.'});
});

app.post('/articles', bodyParser, (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
});

app.use(function(req, res){
  console.error(req);
  res.status(404).send('<h1>Try again! Not found. <br />You knew this would break, why do this?</h1>');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));