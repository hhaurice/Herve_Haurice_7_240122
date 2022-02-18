const express = require('express');

const app = express();

const db = require('./config/db');

const User = require('./models/user');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.get('/users', (req, res, next) => {
    User.findAll()
        .then(users => res.status(200).json(users))
        .catch(error => res.status(400).json({ error }));
  });


app.post('/users', (req, res, next) => {
    User.create({
        ...req.body
    })
        .then(users => res.status(201).json({ message: 'Utilisateur enregistré'}))
        .catch(error => res.status(400).json({ error }));
});


//A corriger
app.put('/users/:id', (req, res, next) => {
        User.findByPk(req.params.id).then((user) =>{
            user.update({
                ...req.body
            })
            .then((user) => res.status(200).json( {message: 'Utilisateur modifié'}))
            .catch(error => res.status(400).json({ error }));
        })
});



module.exports = app;