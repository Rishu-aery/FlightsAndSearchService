'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Airplanes', [
    {
      modelNumber: "Airbus A380",
      capacity: 380,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      modelNumber: "Boeing 747-400",
      capacity: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      modelNumber: "Airbus A340",
      capacity: 340,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      modelNumber: "Boeing 727",
      capacity: 250,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
