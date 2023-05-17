'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  //each property corresponds to a column in the database
  return sequelizeDatabase.define('food', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

