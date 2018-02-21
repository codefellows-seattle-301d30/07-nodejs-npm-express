'use strict';

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.
const express = require('express');
const app = express();

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
//The files are in the public foldeer because for this lab that is waht is acting as the remote storage or server. ExpressJS is the language interfacre between the view and the server, is does all the heavy lifting to move files back and forth.

// app.get('/message', (request, response) =>  {
//   console.log('Get works!');
//   response.send('whatever the heck we want');
// });
//this app.get will tell us if our view is able to talk to the server.

app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
});

app.get ('/new-articles', (request, response) => {
  console.log('new article page available');
  response.sendFile('new.html', {root: './public'});
});


app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
