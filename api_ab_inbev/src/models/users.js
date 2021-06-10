
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    minlength: 2,
    maxlength: 50,
    trim: true,
    required: true
  },
  email: {
    type: String,
    pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    minlength: 5,
    maxlength: 50,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const model = mongoose.model('Users', userSchema)

module.exports = model
