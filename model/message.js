const { Database, DataTypes } = require('sequelize');
const sequelize = require('../Database/db');

const Message = new sequelize.default('Message', {
    messageId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    chatId: {
        type: DataTypes.INTEGER,
        required: true
    },
    senderId: {
        type: DataTypes.INTEGER,
        required: true
    },
    content: {
        type: DataTypes.TEXT,
        required: true
    },
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    messageType: {
        type: DataTypes.STRING,
        required: true
    }
});

module.exports = Message;