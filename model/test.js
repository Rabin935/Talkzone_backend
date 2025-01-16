const {Database, DataTypes} = require('sequelize');

const sequelize = require('../Database/db');

const Test = sequelize.define('test1', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,

    },
    email:{
        type: DataTypes.STRING,
        AllowNull: false,
        unique: true,
    },

});

module.exports = Test1;