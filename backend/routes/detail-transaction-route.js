const express = require('express')
const route = express.Router()

const{
    getAllDetailTransaction,
} = require("../controllers/detail-transaction-controller")

route.get("/", getAllDetailTransaction)

module.exports = route