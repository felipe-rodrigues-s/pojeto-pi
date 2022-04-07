const faker = require('faker');
const { factory } = require('factory-girl');
const { User } = require('../src/app/models');

let password = '123456';

factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  password: password,
  confirmPassword: password,
  isAdmin: true,
});

module.exports = factory;
