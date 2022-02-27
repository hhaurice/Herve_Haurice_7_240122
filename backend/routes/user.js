const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.createUser);
router.post('/login', userCtrl.logUser);
router.get('/login/:id', userCtrl.getOneUser);
router.put('/login/:id', userCtrl.modifyUser);
router.delete('/login/:id', userCtrl.deleteUser);


module.exports = router;