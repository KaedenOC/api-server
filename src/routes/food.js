'use strict';

const express = require('express');
const router = express.Router();
const { foodModel } = require('../models/index');

router.get('/food', async (req, res, next) => {
  try {
    let food = await foodModel.findAll();

    res.status(200).send(food);
  } catch (error) {
    next(error);
  }
});

router.post('/food', async (req, res, next) => {
  let newFood = await foodModel.create(req.body);

  res.status(200).send(newFood);
});

module.exports = router;

