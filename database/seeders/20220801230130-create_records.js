module.exports = {
  async up (queryInterface, Sequelize) {
    let records =[
      {
        record : "CR2050",
        diagnosis:'se le esta cayendo el pelo',
        treatment : "pastillas para la caida del pelo",
        PetId : 1,
        date:'2022-08-03'
      },
      
    ]
    
     await queryInterface.bulkInsert('Records', records, {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Records', null, {});
  }
};
