const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tesTalkzone_db', 'postgres', 'admin123', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    logging: false,

});

async function testConnection() {
    try{
        await sequelize.authenticate();
        console.log('DB Connection successful......')

    }
    catch(error){
        console.log('Unable to connect....', error)
    }
}

testConnection()

module.exports = sequelize;