const router = require('express').Router()
const BuildingController = require('../controller/BuildingController')
const authenticate = require('../middlewares/authencicate')

router.use(authenticate)
router.get('/', BuildingController.showBuild)
router.post('/', BuildingController.orderBuild)


module.exports = router