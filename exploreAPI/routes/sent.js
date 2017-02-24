var express = require('express');
var router = express.Router();

/* GET places listing. */
router.post('/', function(req, res, next) {
  res.send('this route should receive data and save to database');
});

module.exports = router;
