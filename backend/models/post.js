const { Sequelize, DataTypes} = require('sequelize');

const sequelize = require('../config/db');

const Comment = require('./comment');
const Like = require('./like');

const Post = sequelize.define('post', {

    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    tag: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Post.hasMany(Comment, {
    required: true,
    unique: true
});
Comment.belongsTo(Post);

Post.hasMany(Like, {
    required: true,
    unique: true
});
Like.belongsTo(Post);

// sequelize.sync({ alter: true});

module.exports = Post;