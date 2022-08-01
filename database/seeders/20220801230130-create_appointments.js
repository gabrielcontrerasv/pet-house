
const appointments = require("../../app/routes/appointments");

module.exports = {
  async up (queryInterface, Sequelize) {
    let appointments =[
      {
        id:1,
        date:'2022-08-03',
        description:'revision mi perro sangra en la pata derecha'
      },
      {
        id:2,
        date:'2022-08-04',
        description:'mi gato vomita sangre'
      },
      {
        id:3,
        date:'2022-08-05',
        description:'mi perro permanece aflijido y se lame demasiado'
      }
    ]
    
     await queryInterface.bulkInsert('Appointments', appointments, {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Appointments', null, {});
  }
};
