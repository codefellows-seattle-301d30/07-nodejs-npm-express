'use strict';

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

//load express library from modules
const express = require('express');

//load bodyparser library from modules
const bodyParser = require('body-parser').urlencoded({extended: true});

//instantiate express so that we can use its functionality
const app = express();

//designate a port to serve our app on
const PORT = process.env.PORT || 3000;

//tell the server which directory to serve files from
app.use(express.static('./public'));

//setup a route to post articles
app.post('/articles', bodyParser, (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  //
  console.log(request.body);
  response.send('Record posted to server!!');
});

//setup a route to create new article page
app.get('/new-article', bodyParser, (request, response) => {
  console.log('New Article Requested');
  response.sendFile('/public/new.html', {root: '.'});
});

//set up a route to 404 page
app.get('*', bodyParser, (request, response) => {
  console.log('Page not found');
  response.sendFile('/public/404.html', {root: '.'});
});

//start the app so it listens for changes
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
