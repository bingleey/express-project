const express = require('express');
const router = express.Router();

const {add} = require('./users');

router.get('/users/add', add);

module.exports = router;