const express = require('express')
const cors = require('cors')
const egyptianRoutes = require('./routes/routes.egyptian')

require('dotenv').config()

const app = express()
const port = process.env.port || 3300

app.use(cors())
app.use(express.json())

app.use('/', egyptianRoutes)

app.listen( port , () => { 
    console.log(`server start working on port : ${port}`)
})


