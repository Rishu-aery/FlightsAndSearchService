const { Op, where } = require("sequelize");

const { City } = require("../models/index.js");

class CityRepository {
  async createCity(name) {
    try {
      const city = await City.create({ name });
      console.log("City created:", city.id, city.name);
      return city;
    } catch (error) {
      console.error("Error creating city:", error);
      throw error;
    }
  }

  async deleteCityById(cityId) {
    try {
      await City.destroy({
        where: { id: cityId },
      });
      return true;
    } catch (error) {
      console.error("Error deleting city:", error);
      throw error;
    }
  }
  async updateCity(cityId, data) {
    try {
      // Not return the update Object for mysql
      // const city = await City.update(data, {
      //     where: {id: cityId}
      // });

      // return the update Object
      const city = await City.findByPk(cityId);
      city.name = data.name;
      city.save();

      return city;
    } catch (error) {
      console.error("Error updating city:", error);
      throw error;
    }
  }

  async getCityById(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.error("Error fetching city by ID:", error);
      throw error;
    }
  }

  async getAll(filter) {
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.error("Error fetching city by ID:", error);
      throw error;
    }
  }
}

module.exports = new CityRepository();
// This code defines a CityRepository class that interacts with the City model.
