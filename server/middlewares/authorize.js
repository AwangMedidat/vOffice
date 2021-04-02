const { User } = require('../models')

function authorize (req, res, next) {
  // console.log('masuk authorize');
  const id = +req.params.id
  User.findOne({
    where: {
      id
    }
  }).then(user => {
    if (!user) {
      next({
        name: 'customErr',
        status: 404,
        message: 'user not found'
      })
    } else {
      next()
    }
  })
}

module.exports = authorize