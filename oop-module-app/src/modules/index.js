
const express = require('express');
const users = require('./users/users')

const router = express.Router()

router
    .get('/actors', users.GET)



    module.exports = router