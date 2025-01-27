const {Sequelize, DataTypes} = require('sequelize');

const sequelize = require('../Database/db')

const Users = sequelize.define('Users', {
    id: {
        
        type: DataTypes.INTEGER,
        require: true,
        primaryKey: true,
        unique:true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        
    }
});

module.exports = Users;