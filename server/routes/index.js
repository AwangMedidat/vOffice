const router = require('express').Router()
const UserRouter = require('./user')
const BuildingRouter = require('./buliding')

router.use('/users', UserRouter)
router.use('/building', BuildingRouter)

module.exports = router