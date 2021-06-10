
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Users = require('../models/users')

async function login (email, password) {
  const userFound = await Users.findOne({ email })

  if (!userFound) throw new Error('Invalid data')

  const isPasswordValid = await bcrypt.compare(password, userFound.password)

  if (!isPasswordValid) throw new Error('Invalid data')

  const token = jwt.sign({ id: userFound._id }, process.env.JWT_KEY, { algorithm: 'HS256' })
  return token
}

module.exports = {
  login
}
