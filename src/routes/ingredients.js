'use strict';

const express = require('express');
const router = express.Router();
const { ingredientsModel } = require('../models/index');

router.get('/ingredients', async (req, res, next) => {
  try {
    let ingredients = await ingredientsModel.findAll();

    res.status(200).send(ingredients);
  } catch (error) {
    next(error);
  }
});

router.post('/food', async (req, res, next) => {
  let newFood = await ingredientsModel.create(req.body);

  res.status(200).send(newFood);
});

module.exports = router;
