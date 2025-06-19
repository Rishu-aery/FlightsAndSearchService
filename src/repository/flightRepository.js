const { Flights } = require("../models/index.js");

class FlightsRepository {
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.error("Error In repository layer: ", error);
      throw error;
    }
  }
}

module.exports = new FlightsRepository();
