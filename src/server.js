'use strict';

const express = require('express');
const cors = require('cors');
const foodRouter = require('./routes/food');
const ingredientsRouter = require('./routes/ingredients');


const app = express();
app.use(cors());
app.use(express.json());
app.use(foodRouter);
app.use(ingredientsRouter);


app.get('/', (req, res, next) => {
  res.status(200).send('proof of life');
});


const start = (port) => app.listen(port, () => console.log('listening on port:', port));

module.exports = { start, app };

//todo: error handling
