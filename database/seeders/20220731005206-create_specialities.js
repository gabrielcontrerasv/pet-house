'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {


    let Specialities = [
      {
        id:1,
        specialitie: 'terapeuta'
      },
      {
        id:2,
        specialitie: 'oncologia'
      },
      {
        id:3,
        specialitie :'nutriologia'
      }

    ]
    await queryInterface.bulkInsert('Specialities', Specialities, {});
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Specialities', null, {});
   
  }
};
