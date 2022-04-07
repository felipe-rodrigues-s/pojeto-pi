const request = require('supertest');

//app
const app = require('../../src/app');

//truncate
const trucate = require('../utils/truncate');

//fatory
const factory = require('../factories');

describe('Register admim store', () => {
  beforeEach(async () => {
    await trucate();
  });

  it('should not create two users with same email', async () => {
    let buildUser = await factory.create('User');
    let user = buildUser.dataValues;
    user.confirmPassword = buildUser.password;
    user.phone = '85997518647';
    const response = await request(app).post('/admins/register').send(user);
    expect(response.status).toBe(422);
  });

  it('should create a user, create a user token and return status 200', async () => {
    let buildUser = await factory.create('User');
    let user = buildUser.dataValues;
    user.email = 'gervasioarthur@gmail.com';
    user.confirmPassword = buildUser.password;
    user.phone = '85997518647';
    const response = await request(app).post('/admins/register').send(user);
    expect(response.status).toBe(200);
  });
});
