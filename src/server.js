'use strict';

const express = require('express');
const cors = require('cors');
const { foodModel } = require('./models');


const app = express();
app.use(cors);
app.use(express.json);
const foodRouter = require('./routes/food');

app.get('/', (req, res, next) => {
  res.status(200).send('proof of life');
});

app.get('/food', async (req, res, next) => {
  let food = await foodModel.findAll();

  res.status(200).send(food);
});

app.post('/food', async (req, res, next) => {
  let newFood = await foodModel.create(req.body);

  res.status(200).send(newFood);
});

const start = (port) => app.listen(port, () => console.log('listening on port:', port));

module.exports = { start, app };

//todo: error handling
