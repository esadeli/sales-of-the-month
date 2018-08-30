'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    productName: DataTypes.STRING,
    price: {
      type : DataTypes.INTEGER,
      validate : {
        isNumeric :{
          args: true,
          msg : 'Price input harus berupa angka'
        }
      }
    }
  }, { hooks : {
        beforeCreate : ()=>{
            this.createdAt = new Date();
            this.updatedAt = new Date();
        }
  }});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsToMany(models.Salesman,{through : models.SalesProduct, foreignKey : 'productId'})
  };
  return Product;
};