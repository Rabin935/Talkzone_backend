const {Database, DataTypes} = require('sequelize');

const sequelize = require('../Database/db')

const Userdetail = new sequelize.default('User', {
    id: {
        type: String,
        require: true,
        unique:true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = Userdetail;