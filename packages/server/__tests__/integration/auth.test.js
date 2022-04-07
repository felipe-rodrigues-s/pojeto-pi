const request = require('supertest');

const app = require('../../src/app');
const factory = require('../factories');
const trucate = require('../utils/truncate');

describe('Authentication', () => {
  beforeEach(async () => {
    await trucate();
  });

  it('Should not login if the user is  not registrated', async () => {
    const response = await request(app).post('/auth/login').send({
      email: 'gervasioarthur@gmail.com',
      password: '123456',
    });
    expect(response.status).toBe(422);
  });

  it('Should not login if the password is  not correct', async () => {
    const builduser = await factory.create('User');
    let user = builduser.dataValues;

    const response = await request(app).post('/auth/login').send({
      email: user.email,
      password: '12356',
    });
    expect(response.status).toBe(422);
  });

  it('should return create a token and return status 200', async () => {
    const builduser = await factory.create('User');
    let user = builduser.dataValues;
    const response = await request(app).post('/auth/login').send({
      email: user.email,
      password: '123456',
    });
    expect(response.status).toBe(200);
  });
});
