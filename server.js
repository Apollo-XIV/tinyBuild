// Dependencies
var express = require('express');
var app = express();
var path = require('path');

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.get('/*', async function (req, res) {
    res.render('index');
});

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// start the server in the port 3000 !
app.listen(80, function () {
    console.log('Example app listening on port 80.');
});