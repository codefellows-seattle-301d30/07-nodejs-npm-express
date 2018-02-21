'use strict';

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

// load the express library from node_modules
const express = require('express');

//instantiate express
const app = express();

//setting up directory for express
//it tells the server which directory to serve files from
app.use(express.static('./public'));

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
});

// start the app so it listens for changes
app.listen(PORT,() => console.log(`Listeninbg on port ${PORT}`));
