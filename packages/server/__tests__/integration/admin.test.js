const request = require('supertest');
const { sequelize } = require('../../src/app/models');

//mock
// let user = {
//   name: 'gervasio',
//   email: 'gervasio@gmail.com',
//   phone: '85997518647',
//   password: '123456',
//   confirmPassword: '123456',
// };

//app
const app = require('../../src/app');

//truncate
const trucate = require('../utils/truncate');

//fatory
const factory = require('../factories');

describe('Authentication ', () => {
  beforeEach(async () => {
    await trucate();
  });

  it('should not create two users with same email', async () => {
    let user = await factory.create('User');
    let nextUser = user.dataValues;
    nextUser.confirmPassword = nextUser.password;
    nextUser.phone = '8599750000';

    const response = await request(app).post('/admins/register').send(nextUser);
    expect(response.status).toBe(422);
  });

  it('should login after create user', async () => {
    let user = {
      name: 'gervasio',
      email: 'gervasio@gmail.com',
      phone: '85997518647',
      password: '123456',
      confirmPassword: '123456',
    };
    const response = await request(app).post('/admins/register').send(user);
    expect(response.status).toBe(200);
  });
});
