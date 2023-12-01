const express = require('express')
const route = express.Router()

const{
    getAllUser,
    getUser,
    getUserById,
    createUser,
    updateUser,
    updateUserSelf,
    deleteUser,
} = require("../controllers/user-controller")

route.get("/", getAllUser)
route.get("/self", getUser)
route.get("/:id", getUserById)
route.post("/", createUser)
route.put("/:id", updateUser)
route.put('/updateSelf', updateUserSelf)
route.delete("/:id", deleteUser)

module.exports = route