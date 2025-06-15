'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Airports', [
      {
        name: "Shaheed Bhagat Singh International Airport, Chandigarh",
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kempegowda International Airport Bengaluru",
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hindustan Aeronautics Limited Airport",
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mysore Airport",
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
