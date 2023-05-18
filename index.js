'use strict';

require('dotenv').config();
const PORT = process.env.PORT || 3002;
const { sequelizeDatabase } = require('./src/models');
const { start } = require('./src/server');

sequelizeDatabase.sync()
  .then(() => {
    console.log('successful connection');
    start(PORT);
  })
  .catch(e => {
    console.error(e);
  });



