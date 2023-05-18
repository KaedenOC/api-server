'use strict';

const express = require('express');
const cors = require('cors');
const foodRouter = require('./routes/food');
const ingredientsRouter = require('./routes/ingredients');
const notFound = require('./error-handlers/404');
const internalServerError = require('./error-handlers/500');


const app = express();
app.use(cors());
app.use(express.json());
app.use(foodRouter);
app.use(ingredientsRouter);


app.get('/', (req, res, next) => {
  res.status(200).send('proof of life');
});


app.use('*', notFound);
app.use(internalServerError);

const start = (port) => app.listen(port, () => console.log('listening on port:', port));

module.exports = { start, app };

//todo: error handling
