const express = require('express')
const route = express.Router()

const{
    getAllProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/product-controller")

route.get("/", getAllProduct)
route.get("/:id", getProductById)
route.post("/", createProduct)
route.put("/:id", updateProduct)
route.delete("/:id", deleteProduct)

module.exports = route