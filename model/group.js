const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Database/db');

const Group = new sequelize.default('Group', {
    groupId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    groupName: {
        type: DataTypes.STRING,
        required: true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    adminId: {
        type: DataTypes.INTEGER,
        required: true
    }
});

module.exports = Group;