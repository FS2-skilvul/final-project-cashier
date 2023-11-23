'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detail_Transaction extends Model {
    static associate(models) {
      // define association here
    }
  }
  Detail_Transaction.init({
    product_id: DataTypes.INTEGER,
    transaction_id: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    sub_total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Detail_Transaction',
  });
  return Detail_Transaction;
};