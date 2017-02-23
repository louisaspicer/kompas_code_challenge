var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/explore');


// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//   console.log("Connected to DB");
//   //Instantiating the Model - An instance of Model represents a mongodb document
//   var book1 = new Book({
//     name:"Mongoose Demo 1",
//     isbn: "MNG123",
//     author: "Author1,  Author2",
//     pages: 123
//   });
//   //Saving the model instance to the DB
//   book1.save(function(err){
//     if ( err ) throw err;
//     console.log("Book Saved Successfully");
//   });
// });
