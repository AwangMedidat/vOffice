'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Building extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Building.belongsTo(models.User, {
        foreignKey: 'UserId'
      })
    }
  };
  Building.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Input Should not empty'
        }
      }
    },
    date: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Input Should not empty'
        }
      }
    },
    time: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Input Should not empty'
        }
      }
    },
    value: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Input Should not empty'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Building',
  });
  return Building;
};