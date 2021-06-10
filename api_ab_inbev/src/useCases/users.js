
const User = require('../models/users')
const bcrypt = require('bcrypt')

function getAll (userId) {
  return User.findById(userId)
}

async function getById (id) {
  const user = await User.findById(id)
  if (!user) throw new Error(' No existe el usuario ')
  return User.findById(id)
}

async function create (userObjectData) {
  const { email, password } = userObjectData
  const verifyUser = await User.findOne({ email })
  if (verifyUser) throw new Error(' Ya existe un usuario con este correo ')
  const passwordEncripted = await bcrypt.hash(password, 10)
  return User.create({ ...userObjectData, password: passwordEncripted })
}

async function deleteById (id) {
  const user = await User.findByIdAndDelete(id)
  if (!user) throw new Error(' No existe el usuario ')
  return User.findByIdAndDelete(id)
}

async function updateById (id, newDataUser) {
  const user = await User.findByIdAndUpdate(id)
  if (!user) throw new Error(' No existe el usuario ')
  return User.findByIdAndUpdate(id, newDataUser, { new: true })
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById
}
