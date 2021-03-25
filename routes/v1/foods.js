var express = require('express');
var router = express.Router();
let foodsMock = require('../../mock/foods');

let foods = foodsMock.foods.slice();

router.get('/', function(req, res, next) {
  res.send(foods);
});

router.get('/:id', function(req, res, next) {
  let food = foods.find(food => food.id == req.params.id);
  if (!food) {
    res.sendStatus(404);
  } else {
    res.send(food);
  }
});

router.delete('/:id', function(req, res, next) {
  let index = foods.findIndex(food => food.id == req.params.id);
  if (index === -1) {
    res.sendStatus(404);
  } else {
    foods.splice(index, 1);
    res.sendStatus(200);
  }
});

router.post('/:id/status', function(req, res, next) {
  let food = foods.find(food => food.id == req.params.id);
  if (!food) {
    res.sendStatus(404);
  } else {
    food.status = req.body;
    res.send(food);
  }
});

module.exports = router;
