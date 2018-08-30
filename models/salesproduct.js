'use strict';
module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    salesId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {});
  SalesProduct.associate = function(models) {
    // associations can be defined here
  };
  return SalesProduct;
};