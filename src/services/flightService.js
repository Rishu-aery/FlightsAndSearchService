const {
  FlightRepository,
  AirplaneRepository,
} = require("../repository/index.js");
const { compareDateTime } = require("../utils/helperMethod.js");

class FlightService {
  async createFlight(data) {
    try {
      if (!compareDateTime(data.arrivalTime, data.departureTime)) {
        throw new Error("arrivalTime cannot be less then tha departureTime!");
      }
      const airplane = await AirplaneRepository.getAirplaneById(
        data.airplaneId
      );
      data = { ...data, availableSeats: airplane.capacity };
      const flight = await FlightRepository.createFlight(data);
      return flight;
    } catch (error) {
      console.error("Error In service layer: ", error);
      throw error;
    }
  }

  async getFlightById(flightId) {
    try {
      const flight = await FlightRepository.getFlightById(flightId);
      return flight;
    } catch (error) {
      console.log("Error fetching flight:", error);
      throw error;
    }
  }

  async getAllFlights(filter) {
        try {
            const flight = await FlightRepository.getAllFlights(filter);
            return flight;
        } catch (error) {
            console.log('Error fetching flight list:', error);
            throw (error);
        }
    }
}

module.exports = FlightService;
