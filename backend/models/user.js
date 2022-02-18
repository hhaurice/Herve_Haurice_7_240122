const { Sequelize, DataTypes} = require('sequelize');

const sequelize = require('../config/db');

const bcrypt = require('bcrypt');

const User = sequelize.define('user', {

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

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(value, salt);
        this.setDataValue('password', hash);
      }
  }
});

module.exports = User;