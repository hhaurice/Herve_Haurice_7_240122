const Sequelize = require('sequelize');

require('dotenv').config()

const sequelize = new Sequelize('grouporama', process.env.DB_USER, process.env.DV_password, {
    host: 'localhost',
    dialect: 'mariadb'
})

sequelize.authenticate().then(() => {
    console.log("Connection successfully established");
}).catch((err) => {
    console.log("Error connecting to database"); 
});

module.exports = sequelize;