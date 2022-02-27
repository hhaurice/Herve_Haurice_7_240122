const { Sequelize, DataTypes} = require('sequelize');

const sequelize = require('../config/db');

const Comment = sequelize.define('comment', {

    message: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = Comment;