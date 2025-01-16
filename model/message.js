const sequelize = require('../Database/db');

const UserDetail = sequelize.define('UserDetail', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    phone_number: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    username: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize.STRING,
        allowNull: false
    }
});

module.exports = UserDetail;

