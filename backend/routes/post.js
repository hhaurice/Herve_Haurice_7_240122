const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const postCtrl = require('../controllers/post');

router.get('/posts', auth, postCtrl.getAllPost);
router.post('/posts', auth, postCtrl.createPost);
router.get('/posts/:id', auth, postCtrl.getOnePost);
router.put('/posts/:id', auth, postCtrl.modifyPost);
router.delete('/posts/:id', auth, postCtrl.deletePost);

module.exports = router;