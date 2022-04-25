const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../config/database');
const sequelize = new Sequelize(db);

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = sequelize.define(
  'User',
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    isActive: DataTypes.BOOLEAN,
  },
  {
    hooks: {
      beforeSave: async (user) => {
        if (user.password) {
          user.password = await bcrypt.hash(user.password, 12);
        }
      },
    },
  }
);

module.exports = User;
