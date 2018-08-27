//importing my node modules
var express = require("express");
var bodyParse = require("body-parser");
var signale = require("signale");

//basic express server being started on port 8080
var init = express();
var port =  8080;

//instruct express to bind and listen to port 8080
init.listen(port, function() {
signale.success("Express server binded to port:8080");
});