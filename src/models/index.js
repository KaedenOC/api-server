'use strict';

const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const food = require('./food');
// const ingredients = require('./ingredients');

const DATABASE_URL = process.env.DATABASE_URL;

//database singleton
const sequelizeDatabase = new Sequelize(DATABASE_URL);

//create our working and connected food model
const foodModel = food(sequelizeDatabase, DataTypes);

module.exports = {
  sequelizeDatabase,
  foodModel,
};

//ingredients model

// const ingredientsModel = ingredients(sequelizeDatabase, DataTypes);

module.exports = {
  sequelizeDatabase,
  foodModel,
  // ingredientsModel,
};

