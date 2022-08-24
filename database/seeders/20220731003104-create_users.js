const bcrypt= require('bcrypt');
const { password } = require('../../config/config');
module.exports = {
  async up (queryInterface, Sequelize) {

     let users = [
      {
        name:'gabriel',
        lastName : 'bgt',
        document: 001,
        phone: 123456,
        birthday: '2022-12-04',
        address: 'callefalsa123',
        email : 'backend@admin.com',
        password : await bcrypt.hash('secret', 10),
        passwordconfirm:password,
        RoleId : 1,
        GenderId : 1
      },
      {
        name:'nicolas',
        lastName : 'env',
        document: 002,
        phone: 123456,
        birthday: '2022-12-04',
        address: 'callefalsa123',
        email : 'frontend@admin.com',
        password : await bcrypt.hash('secret', 10),
        passwordconfirm:password,
        RoleId : 2,
        GenderId : 1
      },
      {
        name:'luis',
        lastName : 'cgn',
        document: 003,
        phone: 123456,
        birthday: '2022-12-04',
        address: 'callefalsa123',
        email : 'test@admin.com',
        password : await bcrypt.hash('secret', 10),
        passwordconfirm:password,
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
