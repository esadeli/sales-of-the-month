'use strict';
module.exports = (sequelize, DataTypes) => {
  const Salesman = sequelize.define('Salesman', {
    name: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Salesman.associate = function(models) {
    // associations can be defined here
  };
  return Salesman;
};