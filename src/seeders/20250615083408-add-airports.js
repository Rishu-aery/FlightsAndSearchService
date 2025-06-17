"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const city = await queryInterface.sequelize.query(
      `SELECT id, name FROM Cities WHERE name = "Bangalore";`,
      { type: Sequelize.QueryTypes.SELECT }
    );
    
    return queryInterface.bulkInsert(
      "Airports",
      [
        {
          name: "Ballari Airport (BEP)",
          cityId: city[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kempegowda International Airport Bengaluru",
          cityId: city[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hindustan Aeronautics Limited Airport",
          cityId: city[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mysore Airport",
          cityId: city[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
