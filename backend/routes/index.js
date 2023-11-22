const express = require('express');
const route = express.Router()

const verifyToken = require('../middleware/auth')
const authRoute = require('./auth-route')
const userRoute = require('./user-route')

route.get('/', (req, res) => {
    res.json({
        messsage: "selamat datang di server"
    })
})

route.use('/auth', authRoute)
route.use("/user", verifyToken, userRoute)

module.exports = route;