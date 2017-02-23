// var mongoose = require("mongoose");
//
// var db = mongoose.connection;
//
// db.on("error", console.error.bind(console, "Connection error:"));
// db.once("open", function(callback){
//   console.log("Connection Succeeded."); /* Once the database connection has succeeded, the code in db.once is executed. */
// });
//
// Users.collection.insert(
//    [
//      { firstName: "Marty", lastName: "McFly", age: 20, city: "Somewhere" },
//      { firstName: "Emmett", lastName: "Brown", age: 60, city: "Somewhere" },
//      { firstName: "Lorraine", lastName: "Baines", age: 20, city: "Somewhere" },
//    ]
// );
//
//
// module.exports.User = User; /* Export the model so index.js can access it. */



User.collection.insert(
   [
     { firstName: "Marty", lastName: "McFly", age: 1, city: "Somewhere" },
     { firstName: "Emmett", lastName: "Brown", age: 1, city: "Somewhere" },
     { firstName: "Biff", lastName: "Tannen", age: 1, city: "Somewhere" },
     { firstName: "Lorraine", lastName: "Baines", age: 1, city: "Somewhere" },
     { firstName: "George", lastName: "McFly", age: 1, city: "Somewhere" },
     { firstName: "Dave", lastName: "McFly", age: 1, city: "Somewhere" },
     { firstName: "Linda", lastName: "McFly", age: 1, city: "Somewhere" },
     { firstName: "Seamus", lastName: "McFly", age: 1, city: "Somewhere" },
     { firstName: "Clara", lastName: "Claydon", age: 1, city: "Somewhere" },
     { firstName: "Jules", lastName: "Brown", age: 1, city: "Somewhere" },
     { firstName: "Verne", lastName: "Brown", age: 1, city: "Somewhere" },
     { firstName: "Irving", lastName: "Tannen", age: 1, city: "Somewhere" },
     { firstName: "Buford", lastName: "Tannen", age: 1, city: "Somewhere" },
     { firstName: "Gerald", lastName: "Strickland", age: 1, city: "Somewhere" },
     { firstName: "James", lastName: "Strickland", age: 1, city: "Somewhere" },
   ],
   {
     upsert: true,
   }
);

// var user1 = new User({firstName: "Louisa", lastName: "Spicer",
// 													age: "23", city: "London"});
//
// //save model to MongoDB
// user1.save(function (err) {
//   if (err) {
// 		return err;
//   }
//   else {
//   	console.log("Post saved");
//   }
// });
