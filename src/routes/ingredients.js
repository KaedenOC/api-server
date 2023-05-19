'use strict';

const express = require('express');
const router = express.Router();
const { ingredient } = require('../models/index');

router.get('/ingredients', async (req, res, next) => {
  try {
    let ingredients = await ingredient.read();

    res.status(200).send(ingredients);
  } catch (error) {
    next(error);
  }
});

router.post('/ingredients', async (req, res, next) => {
  let newIngredient = await ingredient.create(req.body);

  res.status(200).send(newIngredient);
});

router.get('/ingredients/:id', async (req, res, next) => {
  let singleIngredient = await ingredient.read(req.params.id);

  res.status(200).send(singleIngredient);
});

router.put('/ingredients/:id', async (req, res, next) => {
  await ingredient.update(req.body, {where: {id: req.params.id}});
  let updatedIngredient = await ingredient.findByPk(req.params.id);

  res.status(200).send(updatedIngredient);
});

router.delete('/ingredients/:id', async (req, res, next) => {
  await ingredient.destroy({where: {id: req.params.id}});

  res.status(200).send('Ingredient deleted successfully');
});

module.exports = router;
