//Require our dependencies
var express = require("express");

// Set up our port to be either the host's designated port or 3000
var PORT = process.env.PORT || 3000;

// Instantiate our express app
var app = express();

// Set up an Express Router
var router = express.Router();

// Designate our public folder a static directory
app.use(express.static(__dirname + "/public"));

// Have every request go through our router middleware
app.use(router);

// Listen on the port
app.listen(PORT, function(){
  console.log("Listening on port:" + PORT);
});
