module.exports = {
  async up (queryInterface, Sequelize) {

     let users = [
      {
        id: 1,
        name:'gabriel',
        lastname : 'bgt',
        documento: 001,
        phone: 123456,
        adress: 'callefalsa123',
        email : 'backend@admin.com',
        password : 'secret'
      },
      {
        id: 2,
        name:'nicolas',
        lastname : 'env',
        documento: 002,
        phone: 123456,
        adress: 'callefalsa123',
        email : 'frontend@admin.com',
        password : 'secret'
      },
      {
        id: 3,
        name:'luis',
        lastname : 'cgn',
        documento: 003,
        phone: 123456,
        adress: 'callefalsa123',
        email : 'test@admin.com',
        password : 'secret'
      }
     ] 
     await queryInterface.bulkInsert('Users', users, {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Users', null, {});
     
  }
};
