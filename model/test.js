const {Database, DataTypes} = require('sequelize');

const sequelize = require('../Database/db')

const Test = sequelize.define('test1', {
    id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: Datatypes.STRING,
        allowNull: false,

    },
    email:{
        type: Datatypes.STRING,
        AllowNull: false,
        unique: true,
    },

});

module.exports = Test1;