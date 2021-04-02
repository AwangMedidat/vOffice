const { Building, User } = require('../models')

class BuildingController{

  static showBuild (req, res, next) {
    Building.findAll({
      include: User
    })
    .then(building => {
      console.log(building)
      res.status(200).json(building)
    }).catch(err => {
      next(err)
    })
  }

  static orderBuild(req, res, next) {
    const { name, date, time, value } = req.body
    Building.create({
      name,
      date,
      time,
      value,
      UserId: +req.decoded.id
    }).then(buildingNew => {
      res.status(201).json(buildingNew)
    }).catch(err => {
      next(err)
    })
  }

}

module.exports = BuildingController