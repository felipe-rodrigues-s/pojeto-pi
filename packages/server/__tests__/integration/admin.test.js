const request = require('supertest');
const { sequelize } = require('../../src/app/models');

//mock
let user = {
  name: 'gervasio',
  email: 'gervasio@gmail.com',
  phone: '85997518647',
  password: '123456',
  confirmPassword: '123456',
};

//app
const app = require('../../src/app');

//
const trucate = require('../utils/truncate');

describe('Authentication ', () => {
  beforeEach(async () => {
    user = {
      name: 'gervasio',
      email: 'gervasio@gmail.com',
      phone: '85997518647',
      password: '123456',
      confirmPassword: '123456',
    };
  });

  it('should return satus 201', async () => {
    const response = await request(app).post('/admins/register').send(user);
    expect(response.status).toBe(201);
  });
});
