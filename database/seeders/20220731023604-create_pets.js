'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     const pets = [
      {
       name: 'John Doe',
       microchip : 1324,
       birthday : "2018-02-22",
       status : false,
       weight : 30,
       status : 1,
       photo : `/local/assets/img/perrito.png`,
       BreedId : 1,
       GenderId : 1,
       UserId : 1,

       },
       {
        name: 'firulais',
        microchip : 1324,
        birthday : "2018-02-22",
        status : false,
        weight : 30,
        status : 1,
        photo : `/local/assets/img/perrito.png`,
        BreedId : 1,
        GenderId : 1,
        UserId : 1,
 
        },
        {
          name: 'max',
          microchip : 1324,
          birthday : "2018-02-22",
          status : false,
          weight : 30,
          status : 1,
          photo : `/local/assets/img/perrito.png`,
          BreedId : 1,
          GenderId : 1,
          UserId : 3,
   
          }
      ]

     await queryInterface.bulkInsert('Pets', pets , {});
  
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Pets', null, {});
     
  }
};
