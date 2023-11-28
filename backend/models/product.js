'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // define association here
      Product.belongsTo(models.User, {foreignKey: 'user_id'}),
      Product.belongsToMany(models.Transaction, { through: 'Detail_Transaction', foreignKey: 'product_id', as: 'transactions', });
    }
  }
  Product.init({
    user_id: DataTypes.INTEGER,
    kode_barang: DataTypes.STRING,
    nama: DataTypes.STRING,
    harga_beli: DataTypes.INTEGER,
    harga_jual: DataTypes.INTEGER,
    stok: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};