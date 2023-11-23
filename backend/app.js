const express = require('express')
const app = express()
const cors = require('cors')
const rootRoutes = require('./routes')

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(rootRoutes)

app.listen(PORT, () => {
    console.log("server running on port : " + PORT);
})