const express = require('express');
const router = express.Router();

const { getAlluser } = require('../controller/user-controller');

router.get('/', getAlluser);

module.exports = router;