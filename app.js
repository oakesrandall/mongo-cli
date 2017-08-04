var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

// mongo.connect(url, function(err, db){
//   var collection = db.collection('restaurants');
//   var pickRestaurant = prompt("Type the name of the restaurant you would information about.");
//   collection.find({"name":pickRestaurant}).toArray(function(err, docs){
//           console.log(docs);
//   });
// });

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  var newRestaurant = prompt("Type the name of the restaurant you would like to add?");
  var restaurantAddress = prompt("What is the restaurant's street address?");
  var zipCode = prompt("What is the restaurant's zip code?");
  var yelpLink = prompt("What is their Yelp url?");

  collection.insert({
    "name":newRestaurant,
    "address":{
      "street":restaurantAddress,
      "zipcode":zipCode
      },
    "yelp":yelpLink
    });
});
