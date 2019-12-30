const express = require('express');
const router = express.Router();

const index = require('./index');
const users = require('./users');

router.get('/', index);

router.get('/users', users);

module.exports = router;

