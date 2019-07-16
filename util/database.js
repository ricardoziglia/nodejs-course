const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '@node.js', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
