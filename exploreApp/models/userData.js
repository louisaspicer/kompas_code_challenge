var User = require('./users');

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
