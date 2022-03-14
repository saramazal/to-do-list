require('dotenv').config({
    path: './.env'

})
const mongoose = require('mongoose')

const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.use(require('cors')())
app.use(express.json())

require('./router')(app)



app.listen(PORT, () => console.log(`Server is running: ${PORT}`))