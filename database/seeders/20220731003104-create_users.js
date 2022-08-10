const bcrypt= require('bcrypt');
module.exports = {
  async up (queryInterface, Sequelize) {

     let users = [
      {
        name:'gabriel',
        lastname : 'bgt',
        document: 001,
        phone: 123456,
        adress: 'callefalsa123',
        email : 'backend@admin.com',
        password : await bcrypt.hash('secret', 10),
        RoleId : 1,
        GenderId : 1
      },
      {
        name:'nicolas',
        lastname : 'env',
        document: 002,
        phone: 123456,
        adress: 'callefalsa123',
        email : 'frontend@admin.com',
        password : await bcrypt.hash('secret', 10),
        RoleId : 2,
        GenderId : 1
      },
      {
        name:'luis',
        lastname : 'cgn',
        document: 003,
        phone: 123456,
        adress: 'callefalsa123',
        email : 'test@admin.com',
        password : await bcrypt.hash('secret', 10),
        RoleId : 3,
        GenderId : 1
      }
     ] 
     await queryInterface.bulkInsert('Users', users, {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Users', null, {});
     
  }
};
