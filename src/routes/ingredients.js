'use strict';

const express = require('express');
const router = express.Router();
const { ingredients } = require('../models/index');

router.get('/ingredients', async (req, res, next) => {
  try {
    let ingredients = await ingredients.read();

    res.status(200).send(ingredients);
  } catch (error) {
    next(error);
  }
});

router.post('/ingredients', async (req, res, next) => {
  let newIngredient = await ingredients.create(req.body);

  res.status(200).send(newIngredient);
});

router.get('/ingredients/:id', async (req, res, next) => {
  let singleIngredient = await ingredients.read({where: {id: req.params.id}});

  res.status(200).send(singleIngredient);
});

router.put('/ingredients/:id', async (req, res, next) => {
  await ingredients.update(req.body, {where: {id: req.params.id}});
  let updatedIngredient = await ingredients.findByPk({where: {id: req.params.id}});

  res.status(200).send(updatedIngredient);
});

router.delete('/ingredients/:id', async (req, res, next) => {
  await ingredients.destroy({where: {id: req.params.id}});

  res.status(200).send('Ingredient deleted successfully');
});

module.exports = router;
