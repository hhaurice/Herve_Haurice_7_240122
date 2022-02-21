const User = require('../models/user');

exports.createUser = (req, res, next) => {
    User.create({
        ...req.body
    })
        .then(users => res.status(201).json({ message: 'Utilisateur créé avec succès'}))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneUser = (req, res, next) => {
    User.findByPk(req.params.id)
        .then(users => res.status(200).json(users))
        .catch(error => res.status(400).json({ message: 'Utilisateur inconnu' }));
};

exports.modifyUser = (req, res, next) => {
    User.findByPk(req.params.id).then((user) =>{
        user.update({
            ...req.body
        })
        .then((user) => res.status(200).json( {message: 'Utilisateur modifié'}))
        .catch(error => res.status(400).json({ error }));
    })
};

exports.deleteUser = (req, res, next) => {
    User.findByPk(req.params.id).then((user) =>{
        user.destroy()
        .then((user) => res.status(200).json( {message: 'Utilisateur supprimé'}))
        .catch(error => res.status(400).json({ error }));
    })
};

exports.getAllUser = (req, res, next) => {
    User.findAll()
        .then(users => res.status(200).json(users))
        .catch(error => res.status(400).json({ error }));
};
