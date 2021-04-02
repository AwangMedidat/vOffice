'use strict';
const {
  Model
} = require('sequelize');
const { hashing } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Building, {
        foreignKey: 'UserId'
      })
    }
  };
  User.init({
    email:{
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Input Should not empty'
        },
        isEmail: {
          args: true,
          msg: 'Incorrect Email format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Input Should not empty'
        },
        len: {
          args: 6,
          msg: 'password must be 6 character or more'
        }
      }
    },
    birth: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Input Should not empty'
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Input Should not empty'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (user, option) => {
        user.password = hashing(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};