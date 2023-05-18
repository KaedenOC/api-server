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

router.get('/ingredients/:id', async (req, res, next) => {
  let singleIngredient = await ingredientsModel.findAll({where: {id: req.params.id}});

  res.status(200).send(singleIngredient);
});

router.put('/ingredients/:id', async (req, res, next) => {
  await ingredientsModel.update(req.body, {where: {id: req.params.id}});
  let updatedIngredient = await ingredientsModel.findAll({where: {id: req.params.id}});

  res.status(200).send(updatedIngredient);
});

router.delete('/ingredients/:id', async (req, res, next) => {
  await ingredientsModel.destroy({where: {id: req.params.id}});

  res.status(200).send('Ingredient deleted successfully');
});

module.exports = router;
