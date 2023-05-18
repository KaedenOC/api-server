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

router.post('/ingredients', async (req, res, next) => {
  let newIngredient = await ingredientsModel.create(req.body);

  res.status(200).send(newIngredient);
});

module.exports = router;
