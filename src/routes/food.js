'use strict';

const express = require('express');
const router = express.Router();
const { foods, ingredientsModel } = require('../models/index');

router.get('/food', async (req, res, next) => {
  try {
    let food = await foods.read();

    res.status(200).send(food);
  } catch (error) {
    next(error);
  }
});

router.post('/food', async (req, res, next) => {
  let newFood = await foods.create(req.body);

  res.status(200).send(newFood);
});

router.get('/food/:id', async (req, res, next) => {
  try {
    let singleFood = await foods.read(req.params.id);

    res.status(200).send(singleFood);

  } catch (error) {
    console.error(error);
  }
});

router.put('/food/:id', async (req, res, next) => {
  await foods.update(req.body, req.params.id);
  let updatedFood = await foods.read(req.params.id);

  res.status(200).send(updatedFood);
});

router.delete('/food/:id', async (req, res, next) => {
  try {
    let deletedFood = await foods.delete(req.params.id);
    res.status(200).send(deletedFood);

  } catch (error) {
    next(error);
  }

});

router.get('/foodWithIngredients', async (req, res, next) => {
  let foodWithIng = await foods.readAllWith(ingredientsModel);
  res.status(200).send(foodWithIng);
});

router.get('/foodWithSingleIngredient/:id', async (req, res, next) => {
  let oneFood = await foods.findAll({
    include: { model: ingredientsModel },
    where: { id: req.params.id },
  });
  res.status(200).send(oneFood);
});


module.exports = router;

