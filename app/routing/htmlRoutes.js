var path = require("path");
var signale = require("signale");
//exports the code so that we can grab the functions later on
module.exports = function(init) {

//(...).com/survey routes to the public/survery.html directory on the server and loads that html for the user.
  init.get("/survey", function(req, res) {
    signale.success("EXPRESS: Sent a GET request to survey.html");
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  //  * wildcard incase we dont know where to route the user we send them back to the home page
  init.get("*", function(req, res) {
    signale.success("EXPRESS(Wildcard): Sent a GET request to home.html");
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};