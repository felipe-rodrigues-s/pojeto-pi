const { DataTypes } = require('sequelize')

const db = require('../database/conn')

const Slider = db.define('sliders', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Slider