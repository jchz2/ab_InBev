const mongoose = require('mongoose')
require('dotenv').config({ path: `.env.${ process.env.NODE_ENV }` })

const MONGO_URL = process.env.MONGO_URL

function connectDB () {
  mongoose
    .connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    .then(() => {
      console.log('DB connected successfully')
    })
    .catch(err => console.log('Error: ', err))
}

module.exports = connectDB
