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
       { productName: 'Sabun Cair Sayap',
         price: 20000,
         createdAt : new Date(),
         updatedAt : new Date()
        },
        { productName: 'Odol Pepsodent',
         price: 8000,
         createdAt : new Date(),
         updatedAt : new Date()
        },
        { productName: 'Mie Indonesia',
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
