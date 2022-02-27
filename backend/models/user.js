const { Sequelize, DataTypes} = require('sequelize');

const sequelize = require('../config/db');

const bcrypt = require('bcrypt');

const Post = require('./post');
const Comment = require('./comment');
const Like = require('./like');

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

User.hasMany(Post, {
  required: true,
  unique: true
});
Post.belongsTo(User);

User.hasMany(Comment, {
  required: true,
  unique: true
});
Comment.belongsTo(User);

User.hasMany(Like, {
  required: true,
  unique: true
});
Like.belongsTo(User);

//sequelize.sync({ alter: true});


module.exports = User;