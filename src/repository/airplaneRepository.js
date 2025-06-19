const { Airplane } = require("../models/index.js");

class AirplaneRepository {
  async getAirplaneById(id) {
    try {
      const airplane = await Airplane.findByPk(id);
      return airplane;
    } catch (error) {
      console.error("Error In repository layer: ", error);
      throw error;
    }
  }
}

module.exports = new AirplaneRepository();
