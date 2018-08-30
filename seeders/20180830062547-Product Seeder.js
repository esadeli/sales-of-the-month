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
     return queryInterface.bulkInsert('Products',[
       { name: 'Sabun Cair Sayap',
         price: 20000,
         createdAt : new Date(),
         updatedAt : new Date()
        },
        { name: 'Odol Pepsodent',
         price: 8000,
         createdAt : new Date(),
         updatedAt : new Date()
        },
        { name: 'Mie Indonesia',
         price: 2000,
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
