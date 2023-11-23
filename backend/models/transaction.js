'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.User, {foreignKey: 'user_id'}),
      Transaction.belongsToMany(models.Product, { through: 'Detail_Transaction', foreignKey: 'transaction_id', as: 'products' });
    }
  }
  Transaction.init({
    user_id: DataTypes.INTEGER,
    total_biaya: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};