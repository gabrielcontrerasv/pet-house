'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
       let genders = [
        {
          id:1,
          gender:'masculino'
        },
        {
          id:2,
          gender:'femenino'
        },
        {
          id:3,
          gender:'macho'
        },
        {
          id:4,
          gender:'hembra'
        }
       ]
     await queryInterface.bulkInsert('Genders',genders ,{});
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Genders', null, {});
     
  }
};
