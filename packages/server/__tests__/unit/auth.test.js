const request = require('supertest');

const app = require('../../src/app');
const factory = require('../factories');
const trucate = require('../utils/truncate');

describe('Login validations', () => {
  beforeEach(async () => {
    await trucate();
  });

  it('should not login with empty  email', async () => {
    let user = {
      email: '',
      password: '12345',
    };
    const response = await request(app).post('/auth/login').send(user);
    expect(response.status).toBe(422);
  });

  it('should not login with invalid email', async () => {
    const builduser = await factory.create('User');
    let user = builduser.dataValues;
    user.email = 'gervasio';
    const response = await request(app).post('/auth/login').send(user);
    expect(response.status).toBe(422);
  });

  it('should not login with empty password', async () => {
    const builduser = await factory.create('User');
    let user = builduser.dataValues;
    user.password = '';
    const response = await request(app).post('/auth/login').send(user);
    expect(response.status).toBe(422);
  });
});
