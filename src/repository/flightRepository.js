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

  async getFlightById(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.error("Error fetching flight by ID:", error);
      throw error;
    }
  }

  async getFlightById(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.error("Error fetching flight by ID:", error);
      throw error;
    }
  }
}

module.exports = new FlightsRepository();
