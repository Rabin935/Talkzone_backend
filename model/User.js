const {Database, DataTypes} = require('sequelize');

const sequelize = require('../Database/db')

const Userdetail = new sequelize.default('test1', {
    id: {
        type: String,
        require: true,
        unique:true
    },
    phone_number: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = Test1;