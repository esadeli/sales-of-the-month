'use strict';
module.exports = (sequelize, DataTypes) => {
  const Op =require('sequelize').Op

  const ConvertDateHelper = require('../helpers/ConvertDateHelper')

  const Salesman = sequelize.define('Salesman', {
    name: DataTypes.STRING,
    birthday: {
      type : DataTypes.STRING, 
      validate :{
        isFormat : function(value,next){
              let checkStr = value;
              if(checkStr[2] && checkStr[5]){
                  next()
              }else {
                  next('Format birthday harus DD-MM-YYYY')
              }
        },
        isNumber : function(value,next){
              let checkArr = value.split('-')

              let str = checkArr[0]+checkArr[1]+checkArr[2];

              let regex = new RegExp(/^\d+$/)

              if(regex.test(str)){
                    next()
              }else{
                    next('Birthday input harus berupa angka')
              }
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      validate : {
        isEmail :{
          args : true,
          msg : 'Input email harus berupa email'
        },
        isExist : function(value,next){

          Salesman.findAll({where : {
            email : value,
            id : {[Op.ne] : this.id}} }
          ).then(rows =>{
                if(rows.length===0){
                    next()
                }else{  
                    next('Alamat email harus unik');
                }
          }).catch(err =>{
                next(err)
          })
        }

      }
    }
  }, { hooks :{
        beforeCreate : () => {
            this.birthday = ConvertDateHelper(this.birthday);
            this.createdAt = new Date();
            this.updatedAt = new Date();
        }
  }});
  Salesman.associate = function(models) {
    // associations can be defined here
    Salesman.belongsToMany(models.Product,{through : models.SalesProduct, foreingKey : 'salesId'})
  };
  return Salesman;
};