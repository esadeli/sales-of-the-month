'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Salesmans',[
        {
          salesName : 'Bambang Suharja',
          birthday: '1994-04-03',
          email: 'bambsuharja@sales.com',
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          salesName : 'Agung Nugroho',
          birthday: '1987-06-03',
          email: 'agungnugroho@sales.com',
          createdAt : new Date(),
          updatedAt : new Date()
        }
      ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
