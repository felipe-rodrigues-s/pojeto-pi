const request = require('supertest');

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

  it('should not create a admin user with empty name', async () => {
    user.name = '';
    const response = await request(app).post('/admins/register').send(user);
    expect(response.status).toBe(422);
  });

  it('should not create a admin user if the name has less than 4 characters', async () => {
    user.name = 'ger';
    const response = await request(app).post('/admins/register').send(user);
    expect(response.status).toBe(422);
  });

  it('should not create a admin user with empty email', async () => {
    user.email = '';
    const response = await request(app).post('/admins/register').send(user);
    expect(response.status).toBe(422);
  });

  it('should not create a admin user with invalid email', async () => {
    user.email = 'gervasio';
    const response = await request(app).post('/admins/register').send(user);
    expect(response.status).toBe(422);
  });

  it('should not create a admin user with empty phone number', async () => {
    user.phone = '';
    const response = await request(app).post('/admins/register').send(user);
    expect(response.status).toBe(422);
  });

  it('should not create a admin user with invalid phone number', async () => {
    user.phone = '8599';
    const response = await request(app).post('/admins/register').send(user);
    expect(response.status).toBe(422);
  });

  it('should not create a admin user with empty password', async () => {
    user.password = '';
    const response = await request(app).post('/admins/register').send(user);
    expect(response.status).toBe(422);
  });

  it('should not create a admin user if the password is less than 6 characters', async () => {
    user.password = '12345';
    const response = await request(app).post('/admins/register').send(user);
    expect(response.status).toBe(422);
  });

  it('should not create a admin user if the password do not match', async () => {
    user.confirmPassword = '123458';
    const response = await request(app).post('/admins/register').send(user);
    expect(response.status).toBe(422);
  });
});
