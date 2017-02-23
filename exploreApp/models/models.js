var mongoose = require("mongoose");
var Users = require("../models/users"); /* Imports the module. It contains the schema we need. */
mongoose.connect("mongodb://localhost:27017/explore");

var db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function(callback){
  console.log("Connection Succeeded."); /* Once the database connection has succeeded, the code in db.once is executed. */
});

Users.collection.insert(
   [
     { firstName: "Marty", lastName: "McFly", age: 20, city: "Somewhere" },
     { firstName: "Emmett", lastName: "Brown", age: 60, city: "Somewhere" },
     { firstName: "Lorraine", lastName: "Baines", age: 20, city: "Somewhere" },
   ]
);


module.exports.User = User; /* Export the model so index.js can access it. */
