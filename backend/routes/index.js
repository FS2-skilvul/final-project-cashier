const express = require('express');
const route = express.Router()

const userRoute = require('./user-route')

route.get('/', (req, res) => {
    res.json({
        messsage: "selamat datang di server"
    })
})

route.use("/user", userRoute)

module.exports = route;