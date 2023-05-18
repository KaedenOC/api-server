'use strict';

const express = require('express');
const router = express.Router();
const { foodModel, ingredientsModel } = require('../models/index');

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

router.get('/food/:id', async (req, res, next) => {
  let singleFood = await foodModel.findAll({where: {id: req.params.id}});

  res.status(200).send(singleFood);
});

router.put('/food/:id', async (req, res, next) => {
  await foodModel.update(req.body, {where: {id: req.params.id}});
  let updatedFood = await foodModel.findAll({where: {id: req.params.id}});

  res.status(200).send(updatedFood);
});

router.delete('/food/:id', async (req, res, next) => {
  await foodModel.destroy({where: {id: req.params.id}});

  res.status(200).send('food deleted successfully');
});

router.get('/foodWithIngredients', async (req, res, next) => {
  let foods = await foodModel.findAll({
    include: {
      model: ingredientsModel,
    },
  });
  res.status(200).send(foods);
});

router.get('/foodWithSingleIngredient/:id', async (req, res, next) => {
  let foods = await foodModel.findAll({
    include: {model: ingredientsModel},
    where: {id: req.params.id},
  });
  res.status(200).send(foods);
});


module.exports = router;

