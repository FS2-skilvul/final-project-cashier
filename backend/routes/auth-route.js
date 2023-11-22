const express = require('express');
const route = express.Router()

const {
    login,
    register
} = require('../controllers/auth-controller')

route.post('/login', login)
route.post('/regis', register)

module.exports = route
