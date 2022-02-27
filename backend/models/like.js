const { Sequelize, DataTypes} = require('sequelize');

const sequelize = require('../config/db');

const Like = sequelize.define('like', {
   likes: {
       type: DataTypes.INTEGER,
       default: 0, 
       allowNull: false
   },
   dislikes: {
       type: DataTypes.INTEGER,
       default: 0,
       allowNull: false
   }
});

// sequelize.sync({ alter: true});

module.exports = Like;