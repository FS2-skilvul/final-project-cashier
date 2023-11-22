'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    nomor_telepon: DataTypes.STRING,
    nama_toko: DataTypes.STRING,
    alamat_toko: DataTypes.STRING,
    url_photo_profil: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};