'use strict';

const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const food = require('./food');
const ingredients = require('./ingredients');
const Collection = require('./collection');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory:'
  : process.env.DATABASE_URL;

//database singleton
const sequelizeDatabase = new Sequelize(DATABASE_URL);

//create our working and connected food model
const foodModel = food(sequelizeDatabase, DataTypes);

// module.exports = {
//   sequelizeDatabase,
//   foodModel,
// };

//ingredients model

const ingredientsModel = ingredients(sequelizeDatabase, DataTypes);

//create associations
foodModel.hasMany(ingredientsModel),{
  foreignKey: 'foodId',
  sourceKey: 'id',
};
ingredientsModel.belongsTo(foodModel),{
  foreignKey: 'foodId',
  targetKey: 'id',
};

module.exports = {
  sequelizeDatabase,
  foods: new Collection(foodModel),
  ingredient: new Collection(ingredientsModel),
  ingredientsModel,
};

