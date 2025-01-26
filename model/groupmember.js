const { Database, DataTypes } = require('sequelize');
const sequelize = require('../Database/db');

const GroupMember = new sequelize.default('GroupMember', {
    groupId: {
        type: DataTypes.INTEGER,
        required: true
    },
    userId: {
        type: DataTypes.INTEGER,
        required: true
    },
    joinedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

module.exports = GroupMember;