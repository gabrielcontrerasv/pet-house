'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Roles', [
      {
       id: 1,
       role: 'admin'
      },
      {
        id:2,
        role: 'manager'
      },
      {
        id:3,
        role: 'specialist'
      },
      {
        id:4,
        role: 'seller'
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('Roles', null, {});
     
  }
};
