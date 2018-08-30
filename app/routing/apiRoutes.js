var signale = require("signale");
var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {

    //create an object to hold out match
    var match = {
      name: "",
      photo: "",
      friendDifference: Infinity
    };

    // Here we take the result of the user"s survey POST and parse it.
    var userData = req.body;
    var userScores = userData.scores;

    // This variable will calculate the difference between the user"s scores and the scores of
    // each user in the database
    var totalDifference;

    // Here we loop through all  friend possibilities in the database.
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;

      signale.success(currentFriend);

      // We then loop through all the scores of each friend in our object
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        // We calculate the difference between the scores and set the equal to total difference
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      // If the total difference is less than or equal to the best matchs total difference 
      if (totalDifference <= match.friendDifference) {
      
        //we set the best match to the current friend we are looping through
        match.name = currentFriend.name;
        match.photo = currentFriend.photo;
        match.friendDifference = totalDifference;
      }
    }

    //pushes best match 
    //format response.jsobject notation
    res.json(match);
  });
};
