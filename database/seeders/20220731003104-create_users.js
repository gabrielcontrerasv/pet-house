module.exports = {
  async up (queryInterface, Sequelize) {

     let users = [
      {
        id: 1,
        name:'gabriel',
        lastname : 'bgt',
        document: 001,
        phone: 123456,
        adress: 'callefalsa123',
        email : 'backend@admin.com',
        password : 'secret',
        RoleId : 1,
        GenderId : 1
      },
      {
        id: 2,
        name:'nicolas',
        lastname : 'env',
        document: 002,
        phone: 123456,
        adress: 'callefalsa123',
        email : 'frontend@admin.com',
        password : 'secret',
        RoleId : 2,
        GenderId : 1
      },
      {
        id: 3,
        name:'luis',
        lastname : 'cgn',
        document: 003,
        phone: 123456,
        adress: 'callefalsa123',
        email : 'test@admin.com',
        password : 'secret',
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
