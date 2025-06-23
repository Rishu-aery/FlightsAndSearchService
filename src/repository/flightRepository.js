const { Op } = require("sequelize");
const { Flights } = require("../models/index.js");

class FlightsRepository {

  #createFilter(data) {
    const filter = {};
    if (data.arrivalAirportId)
      filter.arrivalAirportId = data.arrivalAirportId;
    if (data.departureAirportId)
      filter.departureAirportId = data.departureAirportId;
    if (data.date)
      filter.departureTime = { [Op.startsWith]:  data.date};
    
    if (data.minPrice && data.maxPrice) {
      filter.price = { [Op.between]: [data.minPrice, data.maxPrice] };
    } else if (data.minPrice) {
      filter.price = { [Op.gte]: data.minPrice };
    } else if (data.maxPrice) {
      filter.price = { [Op.lte]: data.maxPrice };
    }
    return filter
  }

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
      if (!flight) {
        throw new Error("Flight doesn't exist for this route!");
      }
      return flight;
    } catch (error) {
      console.error("Error fetching flight by ID:", error);
      throw error;
    }
  }

  async getAllFlights(filter) {
    try {
      const filterObject = this.#createFilter(filter);      
      const flight = await Flights.findAll({ where: filterObject });
      if (!flight) {
        throw new Error("Flight doesn't exist for this route!");
      }
      return flight;
    } catch (error) {
      console.error("Error fetching flights:", error);
      throw error;
    }
  }
}

module.exports = new FlightsRepository();
