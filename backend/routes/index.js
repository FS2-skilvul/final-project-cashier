const express = require('express');
const route = express.Router()

const verifyToken = require('../middleware/auth')
const authRoute = require('./auth-route')
const userRoute = require('./user-route')
const productRoute = require('./product-route')
const transactionRoute = require('./transaction-route')
const detailTransactionRoute = require('./detail-transaction-route')

route.get('/', (req, res) => {
    res.json({
        messsage: "selamat datang di server"
    })
})

route.use('/auth', authRoute)
route.use("/user", verifyToken, userRoute)
route.use("/product", verifyToken, productRoute)
route.use("/transaction", verifyToken, transactionRoute)
route.use("/detail_transaction", verifyToken, detailTransactionRoute)

module.exports = route;