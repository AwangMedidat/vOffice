'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Buildings', [
      {
        name: 'Tokopedia Tower',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Allianz Tower',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Semesco Tower',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Batavia One Tower',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kuningan Tower',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Buildings', null, {});
  }
};
