'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     const pets = [
      {
       name: 'John Doe',
       code_number : 1324,
       birthday : "2018-02-22",
       isIntern : false,
       weight : 30,
       status : 1,
       photo : `/local/assets/img/perrito.png`,
       BreedId : 1,
       GenderId : 1,
       UserId : 1,

       },
       {
        name: 'firulais',
        code_number : 1324,
        birthday : "2018-02-22",
        isIntern : false,
        weight : 30,
        status : 1,
        photo : `/local/assets/img/perrito.png`,
        BreedId : 1,
        GenderId : 1,
        UserId : 2,
 
        },
        {
          name: 'max',
          code_number : 1324,
          birthday : "2018-02-22",
          isIntern : false,
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
