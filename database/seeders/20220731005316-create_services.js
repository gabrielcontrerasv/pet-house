'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     let services = [
      {
        
        service:'peluqueria',
        description: 'mejorar el estado de presentacion de las mascotas',
        price: 50000,
      },
      {
        
        service:'veterinaria',
        description: 'revisamos lo poblemas de salud que pueda tener tu mascota',
        price: 50000,
      },
      {
        
        service:'guarderia',
        description: 'cuidamos tu mascota mientras trabajas',
        price: 50000,
      },
      {
        
        service:'hospedaje',
        description: 'cuidamos de tu mascota incluso de noche para que viajes tranquilo',
        price: 50000,
      },
      {
        
        service:'cumpleanos',
        description: 'celebracion de cumpleanos para tu mascota',
        price: 50000,
      },
      {
        
        service:'baño',
        description: 'realizamos la mejor limpieza que puedas esperar para tu mascotas',
        price: 50000,
      }
     ]
     await queryInterface.bulkInsert('Services', services, {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Services', null, {});
    
  }
};
