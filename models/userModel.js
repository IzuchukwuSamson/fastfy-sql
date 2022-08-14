const Sequelize = require('sequelize');
const db = require('../utils/db');

const userSchema = db.define('user', {
  firstname: {
    type: Sequelize.STRING,
  },
  lastname: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.NUMBER,
  },
  comments: {
    type: Sequelize.STRING,
  },
  createdAt: Date,
  updatedAt: Date,
});

module.exports = userSchema;
