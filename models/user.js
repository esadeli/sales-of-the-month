'use strict';
module.exports = (sequelize, DataTypes) => {
  const HashPassword = require('../helpers/HashPassword');

  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: { 
      type :DataTypes.STRING,
      validate : {
        len :{
          args : [6,100],
          msg : 'Password harus minimal 6 karakter'
        }
      }
    },
    role: {
      type : DataTypes.STRING,
      defaultValue : 'Admin'
     }
  }, { hooks : {
    
    beforeCreate : (user)=>{
        let hash = HashPassword(user.password);
        user.password = hash;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};