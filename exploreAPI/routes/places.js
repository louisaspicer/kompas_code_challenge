var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method;
      }
}));

router.route('/')
    .get(function(req, res, next) {
        mongoose.model('Place').find({}, function (err, places) {
              if (err) {
                  return console.error(err);
              } else {
                res.json(places);
                //   res.format({
                //     html: function(){
                //         res.render('places/index', {
                //               title: 'All Places',
                //               "places" : places
                //           });
                //     },
                //     json: function(){
                //         res.json(infophotos);
                //     }
                // });
              }
        });
    })
    // .post(function(req, res) {
    //     // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
    //     var firstName = req.body.firstName;
    //     var lastName = req.body.lastName;
    //     var age = req.body.age;
    //     var city = req.body.city;
    //     //call the create function for our database
    //     mongoose.model('User').create({
    //         firstName : firstName,
    //         lastName : lastName,
    //         age : age,
    //         city : city
    //     }, function (err, blob) {
    //           if (err) {
    //               res.send("There was a problem adding the information to the database.");
    //           } else {
    //               //Blob has been created
    //               console.log('POST creating new blob: ' + blob);
    //               res.format({
    //                   //HTML response will set the location and redirect back to the home page. You could also create a 'success' page if that's your thing
    //                 html: function(){
    //                     // If it worked, set the header so the address bar doesn't still say /adduser
    //                     res.location("users");
    //                     // And forward to success page
    //                     res.redirect("/users");
    //                 },
    //                 //JSON response will show the newly created blob
    //                 json: function(){
    //                     res.json(blob);
    //                 }
    //             });
    //           }
    //     })
    // });

//For creating a new user

router.get('/new', function(req, res) {
  res.render('places/new', { title: 'Add New Place' });
});

// route middleware to validate :id
router.param('id', function(req, res, next, id) {
    //console.log('validating ' + id + ' exists');
    //find the ID in the Database
    mongoose.model('Place').findById(id, function (err, place) {
        //if it isn't found, we are going to repond with 404
        if (err) {
            console.log(id + ' was not found');
            res.status(404);
            var err = new Error('Not Found');
            err.status = 404;
            res.format({
                html: function(){
                    next(err);
                 },
                json: function(){
                       res.json({message : err.status  + ' ' + err});
                 }
            });
        //if it is found we continue on
        } else {
            //uncomment this next line if you want to see every JSON document response for every GET/PUT/DELETE call
            //console.log(user);
            // once validation is done save the new item in the req
            req.id = id;
            // go to the next thing
            next();
        }
    });
});

module.exports = router;
