var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({ //This is where Schema is defined.
      firstName: String,
      lastName: String,
      age: Number,
      city: String
    });

module.exports.userSchema = userSchema; //Export Schema so that models.js can access it.
