const Post = require('../models/post');
const User = require('../models/user');

exports.createPost = (req, res, next) => {
    Post.create({
        message: req.body.message,
        tag: req.body.tag,
        userId: req.body.userId
       
    })
        .then(posts => res.status(201).json(posts))
        .catch(error => res.status(400).json({ error }));
};

exports.getOnePost = (req, res, next) => {
    Post.findByPk(req.params.id)
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }));
};

exports.modifyPost = (req, res, next) => {
    Post.findByPk(req.params.id).then((post) =>{
        post.update({
            message: req.body.message,
            tag: req.body.tag,
            userId: req.body.userId
        })
        .then(() => res.status(200).json( {message: 'Vous avez modifié votre publication'}))
        .catch(error => res.status(400).json({ error }));
    })
};

exports.deletePost = (req, res, next) => {
    Post.findByPk(req.params.id).then((post) =>{
        post.destroy()
        .then(() => res.status(200).json( {message: 'Vous avez supprimé votre publication'}))
        .catch(error => res.status(400).json({ error }));
    })
};

exports.getAllPost = (req, res, next) => {
    Post.findAll()
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }));
};