const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');

router.get('/posts', postCtrl.getAllPost);
router.post('/posts', postCtrl.createPost);
router.get('/posts/:id', postCtrl.getOnePost);
router.put('/posts/:id', postCtrl.modifyPost);
router.delete('/posts/:id', postCtrl.deletePost);

module.exports = router;