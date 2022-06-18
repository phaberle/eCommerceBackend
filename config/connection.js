const e = require('express');
const Sequalize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequalize('ecommerce_db', 'dbuser', 'dbuser',{
  host:'localhost',
  dialect: 'mysql',
  port: '3306'
});


module.exports = sequelize;

