var express = require('express');
var router = express.Router();
let foodsMock = require('../../mock/foods');

router.get('/', function(req, res, next) {
  res.send(foodsMock.foods);
});

router.get('/:id', function(req, res, next) {
  let food = foodsMock.foods.find(food => food.id == req.params.id);
  if (!food) {
    res.sendStatus(404);
  } else {
    res.send(food);
  }
});

router.post('/:id/status', function(req, res, next) {
  let food = foodsMock.foods.find(food => food.id == req.params.id);
  if (food) {
    res.sendStatus(404);
  } else {
    food.status = req.body;
    res.send(food);
  }
});

module.exports = router;
