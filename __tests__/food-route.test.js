// 'use strict';

// const { app } = require('express');
// const supertest = require('supertest');
// const request = supertest(app);
// const { sequelizeDatabase } = require('../src/models');

// beforeAll(async () => {
//   await sequelizeDatabase.sync();
// });

// afterAll(async () => {
//   await sequelizeDatabase.drop();
// });

// describe('food route', () => {
//   test('create a food', async () => {
//     let response = await request.post('/food').send({
//       name: 'test',
//     });
//     expect(response.status).toEqual(200);
//     expect(response.body.name).toEqual('test');
//   });
//   test('get all food', async () => {
//     let response = await request.get('/food');

//     expect(response.status).toEqual(200);
//     expect(response.body[0].name).toEqual('test');
//   });
// });
