const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Database/db');

const Chat = new sequelize.default('Chat', {
    chatId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    chatType: {
        type: DataTypes.STRING,
        required: true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

module.exports = Chat;