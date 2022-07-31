'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let animals = [
      {
        id:1,
        specie: 'gato'
      },
      {
        id:2,
        specie: 'perro'
      },
      {
        id:3,
        specie :'loro'
      },
      {
        id:4,
        specie :'tortuga'
      }

    ]
    await queryInterface.bulkInsert('Animals',  animals, {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Animals', null, {});
     
  }
};
