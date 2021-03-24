var express = require('express');
var router = express.Router();
let foodsMock = require('../../mock/foods');

router.get('/', function(req, res, next) {
  res.send(foodsMock.foodCategories);
});

module.exports = router;
