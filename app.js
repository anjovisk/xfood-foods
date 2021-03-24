var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var foodsRouterV1 = require('./routes/v1/foods');
var foodCategoriesRouterV1 = require('./routes/v1/foodCategories');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/public/v1/foods', foodsRouterV1);
app.use('/public/v1/foodCategories', foodCategoriesRouterV1);

module.exports = app;
