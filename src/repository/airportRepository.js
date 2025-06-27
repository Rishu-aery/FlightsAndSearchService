const { Airport } = require("../models/index.js");
const { CrudRepository } = require("./index.js");

class AirportRepository extends CrudRepository {
    constructor() {
        super(Airport);
    }
}

module.exports = new AirportRepository();