const express = require('express');
const router = express.Router();

const { addUser, getUser } = require('../controller/userController');
const { add } = require('../controller/tractorController');

router
.route('/register')
.post(addUser)


router
.route('/login')
.post(getUser)


router
.route('/new')
.post(add)


module.exports = router;