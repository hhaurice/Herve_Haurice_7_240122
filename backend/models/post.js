const { Sequelize, DataTypes} = require('sequelize');

const sequelize = require('../config/db');

const Post = sequelize.define('post', {

    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    tag: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Post;