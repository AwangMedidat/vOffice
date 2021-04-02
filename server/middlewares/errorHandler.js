function errHandling (err, req, res, next) {
  if (err.name === 'JsonWebTokenError') {
    res.status(500).json(err.message)
  } else if (err.name === 'SequelizeValidationError') {
    if (err.errors[0].validatorName === 'notEmpty') {
      res.status(400).json(err.errors[0].message)
    } else if (err.errors[0].validatorName === 'isEmail') {
      res.status(400).json(err.errors[0].message)
    } else if (err.errors[0].validatorName === 'len') {
      res.status(400).json(err.errors[0].message)
    } else if (err.errors[0].validatorName === 'isIn') {
      res.status(400).json(err.errors[0].message)
    } else if (err.errors[0].validatorName === 'isNumeric') {
      res.status(400).json(err.errors[0].message)
    }
  } else if (err.name === 'SequelizeUniqueConstraintError') {
    res.status(400).json(err.errors[0].message)
  } else if (err.name === 'loginErr') {
    res.status(400).json(err.message)
  } else if (err.name === 'customErr') {
    res.status(404).json(err.message)
  } else if (err.name === 'TokenInvalid') {
    res.status(404).json(err.message)
  } else {
    res.status(500).json({message: 'Internal Server Error'})
  }
}

module.exports = errHandling