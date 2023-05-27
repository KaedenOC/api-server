'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const { sequelizeDatabase } = require('../src/models');

const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe('food route', () => {
  test('create food', async () => {
    const response = await request.post('/food').send({name: 'test'});

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
  });

  test('read all route', async () => {
    const response = await request.get('/food');

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('test');
  });

  test('read one route', async () => {
    const response = await request.get('/food/1');

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
  });

  test('update route', async () => {
    const response = await request.put('/food/1').send({name: 'test'});

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
  });

  test('delete route', async () => {
    const response = await request.delete('/food/1');
    console.log(response.body);
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
  });
});





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
