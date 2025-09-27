const CrudService = require("./crudService.js");
const AirportRepository = require("../repository/airportRepository.js");

class AirportService extends CrudService {
    constructor(){
        const airportRepository = new AirportRepository();
        super(airportRepository);
    }
}

module.exports = AirportService;