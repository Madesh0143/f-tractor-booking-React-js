const express = require('express');
const router = express.Router();

const { getUser, getAllUsers, getTractor } = require('../controller/adminController');

router
.route('/login')
.post(getUser)

router
.route('/users')
.get(getAllUsers)


router
.route('/tractor')
.get(getTractor)


module.exports = router;