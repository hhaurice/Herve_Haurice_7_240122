const User = require('../models/user');

const bcrypt = require('bcrypt');

exports.createUser = (req, res, next) => {
    User.create({
        ...req.body
    })
    .then(users => res.status(201).json({ message: 'Utilisateur créé avec succès'}))
    .catch(error => res.status(400).json({ error }));
        
};

exports.logUser = (req, res, next) => {
    User.findOne({ where: {email: req.body.email} })
    .then(user => {
        if(!user) {
            return res.status(401).json({ error: 'Utilisateur non trouvé'});
        }
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if(!valid) {
                return res.status(401).json({ error: 'Mot de passe incorrect'});
            }
            res.status(200).json({
                userId: user._id,
                token: 'TOKEN'
            });
        })
        .catch(error => res.status(500).json({ error }));
    })

    .catch(error => res.status(500).json({ error }));

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
