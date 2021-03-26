var express = require('express');
var router = express.Router();
let foodsMock = require('../../mock/foods');

let foods = foodsMock.foods.slice().sort((x, y) => {
  return x.name.localeCompare(y.name);
});
let foodStatuses = foodsMock.foodStatuses.slice();
let foodCategories = foodsMock.foodCategories.slice();
let maxFoodId = foods.slice().sort((x, y) => {
  if (x.id > y.id) return -1;
  if (x.id < y.id) return 1;
  return 0;
})[0].id;

router.get('/', function(req, res, next) {
  res.send(foods);
});

router.post('/', function(req, res, next) {
  let selectedCategories = req.body.categories;
  let food = { 
    ...req.body,
    id: ++maxFoodId,
    status: foodStatuses.find(status => status.value === "available"),
    rating: 0,
    image: "http://localhost/img/food.jpg",
    categories: foodCategories.filter(category => selectedCategories.find(selectedCategory => selectedCategory === category.value))
  };
  foods.push(food);
  res.send(food);
});

router.put('/:id', function(req, res, next) {
  let food = foods.find(food => food.id == req.params.id);
  if (!food) {
    res.sendStatus(404);
  } else {
    let updatedFood = req.body;
    food.categories = foodCategories.filter(category => updatedFood.categories.find(selectedCategory => selectedCategory === category.value));
    food.name = updatedFood.name;
    food.description = updatedFood.description;
    res.send(food);
  }
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
