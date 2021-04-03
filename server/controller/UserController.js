const { User, Building } = require('../models')
const { checkPass } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController{

  static getAll (req, res, next) {
    User.findAll({
      include: Building
    })
    .then(dataUser => {
      res.status(200).json(dataUser)
    }).catch(err => {
      next(err)
    })
  }
  
  static login (req, res, next) {
    let access_token = null
    const { email, password } = req.body
    User.findOne({
      where: {
        email
      }
    }).then(user => {
      if (!user) {
        throw {name: 'loginErr', message: 'invalid email / password'}
      }
      let comparePassword = checkPass(password, user.password)
      if (!comparePassword) {
        throw {name: 'loginErr', message: 'invalid email / password'}
      }
      access_token = generateToken({
        id: user.id,
        email: user.email
      })
      res.status(200).json({
        id: user.id,
        name: user.username,
        access_token
      })
    }).catch(err => {
      next(err)
    })
  }

  static register (req, res, next) {
    const { username, email, password, birth } = req.body
    User.create({
      username,
      email,
      password,
      birth
    }).then(newUser => {
      let obj = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        msg: 'User Created'
      }
      console.log(newUser)
      res.status(201).json(obj)
    }).catch(err => {
      next(err)
    })
  }

  static editUser (req, res, next) {
    const id = +req.params.id
    const { username, email, password, birth } = req.body
    User.update({
      username,
      email,
      password,
      birth
    },{
      where: {
        id
      },
      returning: true
    }).then(updatedUser => {
      res.status(200).json(updatedUser[1][0])
    }).catch(err => {
      next(err)
    })
  }

  static getOneUser (req, res, next) {
    const id = +req.params.id
    User.findOne({
      where: {
        id
      }
    }).then(user => {
      res.status(200).json(user)
    }).catch(err => {
      next(err)
    })
  }

}

module.exports = UserController