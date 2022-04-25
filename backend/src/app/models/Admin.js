const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../config/database');
const sequelize = new Sequelize(db);

//model
const User = require('./User');

const Admin = sequelize.define('Admin', {});
Admin.belongsTo(User, { foreignKey: 'userId', as: 'user' });
module.exports = Admin;
