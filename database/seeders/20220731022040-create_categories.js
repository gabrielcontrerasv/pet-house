'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let Categories = [
      {
        id: 1,
        category:'Peluqueria'
      },
      {
        id: 2,
        category:'Veterinaria'
      },
      {
        id: 3,
        category:'Cuidados temporales'
      },
      {
        id: 4,
        category:'Terapia'
      },
      {
        id: 5,
        category:'Recorridos'
      },
      {
        id: 6,
        category:'Limpieza de mascotas'
      }
     ]
     await queryInterface.bulkInsert('Categories', Categories, {});
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Categories', null, {});
    
  }
};
