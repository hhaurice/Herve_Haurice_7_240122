const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use('/auth', postRoutes);
app.use('/', userRoutes);


module.exports = app;