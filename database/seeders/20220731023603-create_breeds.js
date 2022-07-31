'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let Breed = [
      {
        id:1,
        race: 'Angora'
      },
      {
        id:2,
        race: 'Pastor Aleman'
      },
      {
        id:3,
        race :'Doberman'
      }

    ]
    await queryInterface.bulkInsert('Breeds',  Breed, {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Breeds', null, {});
     
  }
};
