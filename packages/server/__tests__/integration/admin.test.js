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
    let user = await factory.create('User');
    let nextUser = user.dataValues;

    nextUser.confirmPassword = nextUser.password;
    nextUser.phone = '8599750000';

    const response = await request(app).post('/admins/register').send(nextUser);
    expect(422).toBe(422);
  });
});
