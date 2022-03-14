require('dotenv').config({ path: './.env'})
const bodyParser = require("body-parser");
const mongoose = require('mongoose')

const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000


app.use(require('cors')())
app.use(express.json())
//middleware
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


require('./router')(app)


// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(PORT, () => console.log(`Server is running: ${PORT}`))