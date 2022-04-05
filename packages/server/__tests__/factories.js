const faker = require('faker');
const { factory } = require('factory-girl');
const { User } = require('../src/app/models');

let password = faker.internet.password();

factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  phone: faker.faker.phone.phoneNumber(),
  password: password,
  confirmPassword: password,
});

module.exports = factory;
