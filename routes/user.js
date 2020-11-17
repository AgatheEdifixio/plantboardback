const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

module.exports = router;

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);