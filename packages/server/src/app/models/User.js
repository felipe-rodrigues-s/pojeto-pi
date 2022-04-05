const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../config/database')
const sequelize = new Sequelize(db)

const User = sequelize.define(
  'User',
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    isActive: DataTypes.BOOLEAN,
  }
)

module.exports = User
