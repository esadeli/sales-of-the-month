'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: { 
      type :DataTypes.STRING,
      validate : {
        len :{
          args : [6,100],
          msg : 'Password harus minimal 6 karakter'
        },
        isAlphanumeric : {
          arg : true,
          msg : 'Password harus alphanumerik'
        } 
      }
    },
    role: {
      type : DataTypes.STRING,
      defaultValue : 'Admin'
     }
  }, { hooks : {
    beforeCreate : ()=>{
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};