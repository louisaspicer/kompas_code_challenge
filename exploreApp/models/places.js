var mongoose = require("mongoose");

var placeSchema = new mongoose.Schema({
      name: String,
      city: String,
      address: String,
      type: String,
      rating: String
    });


module.exports = mongoose.model('Place', userSchema);
