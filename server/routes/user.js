const router = require('express').Router()
const UserController = require('../controller/UserController')
const authenticate = require('../middlewares/authencicate')
const authorize = require('../middlewares/authorize')

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.use(authenticate)
router.get('/', UserController.getAll)
router.get('/:id', authorize, UserController.getOneUser)
router.put('/:id', authorize, UserController.editUser)

module.exports = router