'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: {
      type : DataTypes.INTEGER,
      validate : {
        isNumeric :{
          args: true,
          msg : 'Price input harus berupa angka'
        }
      }
    }
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsToMany(models.Salesman,{through : models.SalesProducts, foreignKey : 'productId'})
  };
  return Product;
};