const { FlightRepository, AirplaneRepository } = require("../repository/index.js");

class FlightService {
    async createFlight(data) {
        try {
            const airplane = await AirplaneRepository.getAirplaneById(data.airplaneId);
            data = {...data, availableSeats: airplane.capacity};
            const flight = await FlightRepository.createFlight(data);
            return flight;
        } catch (error) {
            console.error("Error In service layer: ", error);
            throw error;
        }
    }
}

module.exports = FlightService;