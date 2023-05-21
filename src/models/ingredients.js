'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  //each property corresponds to a column in the database
  return sequelizeDatabase.define('ingredients', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    foodId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
