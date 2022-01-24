const express = require('express');
const mysql = require('mysql');
const app = express();


require('dotenv').config()

var db = mysql.createConnection({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


app.use((req, res) => {

    res.json({ message: 'Bonjour le monde!' });

});

module.exports = app;