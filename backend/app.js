const express = require('express');
// const mysql = require('mysql');
const app = express();

const Sequelize = require('sequelize');
const { DataTypes, Op } = Sequelize;

const bcrypt = require('bcrypt');

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
      allowNull: true,
      unique: true,
      validate: {
          isEmail: true, 
          myEmailValidator(value) {
              if (value === null) {
                  throw new Error("Please enter an email")
              } 
          }
      }
  },
  password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        // Storing passwords in plaintext in the database is terrible.
        // Hashing the value with an appropriate cryptographic hash function is better.
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(value, salt);
        this.setDataValue('password', hash);
      }
  }
});

User.sync( {alter: true} )
 .then(() => {
     return User.create({
         firstName: 'Presnel',
         lastName: 'Kimpembé',
         email: 'pkimpembe@gmail.com',
         password: 'presko123'
    });
}).then((data) => {
            console.log(data.firstName);
            console.log(data.password);
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