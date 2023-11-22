const express = require('express');
const route = express.Router()

const verifyToken = require('../middleware/auth')
const authRoute = require('./auth-route')
const userRoute = require('./user-route')
const productRoute = require('./product-route')

route.get('/', (req, res) => {
    res.json({
        messsage: "selamat datang di server"
    })
})

route.use('/auth', authRoute)
route.use("/user", verifyToken, userRoute)
route.use("/product", verifyToken, productRoute)

module.exports = route;