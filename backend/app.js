const express = require('express');
// const mysql = require('mysql');
const app = express();

const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;

require('dotenv').config()

const sequelize = new Sequelize('grouporama', process.env.DB_USER, process.env.DV_password, {
    host: 'localhost',
    dialect: 'mariadb'
})

sequelize.authenticate().then(() => {
    console.log("Connection successfully established");
}).catch((err) => {
    console.log("Error connecting to database"); 
})

const User = sequelize.define('user', {
  // Model attributes are defined here
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false  
  },
  email: {
      type: DataTypes.STRING,
      allowNull: false
  },
  password: {
      type: DataTypes.STRING,
      allowNull: false
  }
});

User.sync( {alter: true} )
 .then(() => {
     const user = User.build({
         firstName: 'Keylor',
         lastName: 'Navas',
         email: 'knavas@gmail.com',
         password: 'keylor123'
     });
     return user.save();

}).then((data) =>{
    console.log("User added to database")

}).catch((err) => {
    console.log(err)
});

/*
var db = mysql.createConnection({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'grouporama'
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
*/

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
  
app.use((req, res) => {
    res.json({ message: 'Bonjour le monde!' });
});

module.exports = app;