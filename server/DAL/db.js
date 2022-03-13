const mongoose = require('mongoose')

const username = "saramazal";
const password = "classwork";
connectionString = `mongodb+srv://${username}:${password}@mongo-lesson.ragui.mongodb.net/mongo-lesson?retryWrites=true&w=majority`



console.log('connecting ..')
mongoose.connect(connectionString)
    .then(() => {
        console.log('Mongo connected!')
    })