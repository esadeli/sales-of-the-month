'use strict';
module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    salesId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    amount: DataTypes.INTEGER

  }, { hooks : {
    beforeCreate : ()=>{
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}});
  SalesProduct.associate = function(models) {
    // SalesProduct.belongsTo(models.Product, {foreignKey: 'productId'});
    // SalesProduct.belongsTo(models.Sales, {foreignKey: 'salesId'});
  };
  return SalesProduct;
};