const bodyParser = require('body-parser');
const express = require('express');
const creatError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const app = express();

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(userRoutes);
app.use(adminRoutes);
//app.use(userRoutes);

app.listen(3000);