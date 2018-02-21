'use strict';

// Loading express library
const express = require('express');

// Instantiate express
const app = express();

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

// Tell server which directory. We want public so that users can have access to it. **
app.use(express.static('./public'));

// Creating route to serve up new.html
app.get('/new', (request, response) => {
  console.log('test');
  response.sendFile('/public/new.html', {root: '.'});
});

app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
})

// Listen for changes
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))