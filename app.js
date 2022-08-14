const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

userRoutes = require('./routes/userRoutes');
gigRoutes = require('./routes/gigRoute');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/users', userRoutes);
app.use('/gigs', gigRoutes);

module.exports = app;
