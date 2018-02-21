'use strict';

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

const express = require('express');
const app = express();

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

// public folder is the root directory
app.use(express.static('./public'));

app.get('/new', (request,response) => {
  response.sendFile('/public/new.html', {root: '.'});
});

app.post('/articles', bodyParser, (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
});

app.get('*', (request, response) => {
  response.send('<img src="https://httpstatusdogs.com/img/404.jpg"/>', 404);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
