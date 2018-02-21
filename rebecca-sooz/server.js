'use strict';
//COMMENT: Our files are in a public directory now because we are creating controller and view layers, whereas before we were just working on a view layer. Express JS is a kind of library of package commands that allows the server.js file to control the view seen by an end user. Added console.log per instructions to verify that server.js is working as a controller.
const express = require('express');
const app = express();
app.get('/message',(request,response) => {
  console.log('server working');
  response.send('<footer>Welcome</footer>');
});
// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
});

app.listen(PORT,() => console.log(`Listening on port ${PORT}`)); 