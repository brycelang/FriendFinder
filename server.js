//importing my node modules
var express = require("express");
var bodyParse = require("body-parser");
var signale = require("signale");
var path = require("path");


//basic express server being started on port 8080
var init = express();
var port =  process.env.PORT || 8080;

init.use(bodyParse.urlencoded({ extended: true }));
// parse application/json
init.use(bodyParse.json());

require("./app/routing/htmlRoutes")(init);

//instruct express to bind and listen to port 8080
init.listen(port, function() {
signale.success("Express server binded to port:" + port);
});