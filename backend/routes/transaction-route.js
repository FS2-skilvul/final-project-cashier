const express = require('express')
const route = express.Router()

const{
    getAllTransaction,
    getTransactionById,
    createTransaction,
    updateTransaction,
    deleteTransaction,
} = require("../controllers/transaction-controller")

route.get("/", getAllTransaction)
route.get("/:id", getTransactionById)
route.post("/", createTransaction)
route.put("/:id", updateTransaction)
route.delete("/:id", deleteTransaction)

module.exports = route