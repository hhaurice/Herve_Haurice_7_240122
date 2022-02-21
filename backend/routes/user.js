const express = require('express');
const router = express.Router();


const db = require('./config/db');

const User = require('./models/user');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

router.post('/users', (req, res, next) => {
    User.create({
        ...req.body
    })
        .then(users => res.status(201).json({ message: 'Utilisateur enregistré'}))
        .catch(error => res.status(400).json({ error }));
});

router.get('/users/:id', (req, res, next) => {
    User.findByPk(req.params.id)
        .then(users => res.status(200).json(users))
        .catch(error => res.status(400).json({ message: 'Utilisateur inconnu' }));
});

router.put('/users/:id', (req, res, next) => {
        User.findByPk(req.params.id).then((user) =>{
            user.update({
                ...req.body
            })
            .then((user) => res.status(200).json( {message: 'Utilisateur modifié'}))
            .catch(error => res.status(400).json({ error }));
        })
});


router.delete('/users/:id', (req, res) => {
    User.findByPk(req.params.id).then((user) =>{
        user.destroy()
        .then((user) => res.status(200).json( {message: 'Utilisateur supprimé'}))
        .catch(error => res.status(400).json({ error }));
    })
});


router.get('/users', (req, res, next) => {
    User.findAll()
        .then(users => res.status(200).json(users))
        .catch(error => res.status(400).json({ error }));
});

module.exports = router;