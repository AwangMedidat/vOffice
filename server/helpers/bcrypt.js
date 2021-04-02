const bcrypt = require('bcryptjs')

function hashing(password) {
  var salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)
}

function checkPass(password, passwordDB) {
  return bcrypt.compareSync(password, passwordDB)
}

module.exports = {
  hashing,
  checkPass
}