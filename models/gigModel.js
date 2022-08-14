const Sequelize = require('sequelize');
const db = require('../utils/db');

const Gig = db.define('gig', {
  title: {
    type: Sequelize.STRING,
  },
  technologies: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  budget: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
});

module.exports = Gig;
