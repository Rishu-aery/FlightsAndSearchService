const { FlightService } = require("../services/index.js");

const flightService = new FlightService();

// POST -> /flight
const create = async (req, res) => {
    try {
        const body = req.body;
        const flight = await flightService.createFlight(body);
        res.status(201).json({
            data: flight,
            success: true,
            message: "Flight created successfully!",
        })
    } catch (error) {
        console.log("Error:", error);
        res.status(501).json({
            data: {},
            success: false,
            message: "Internal Server Error!",
            err: error
        });
    }
}

// GET -> /flight/:id
const get = async (req, res) => {
    try {
        const { id } = req.params;
        const flight = await flightService.getFlightById(id);
        res.status(200).json({
            data: flight,
            success: true,
        })
    } catch (error) {
        console.log("Error:", error);
        res.status(501).json({
            data: {},
            success: false,
            message: "Internal Server Error!",
            err: error
        });
    }
}

// GET -> /flights?filters
const getAll = async (req, res) => {
    try {
        const filter = req.query;
        const flight = await flightService.getAllFlights(filter);
        res.status(200).json({
            data: flight,
            success: true,
        })
    } catch (error) {
        console.log("Error:", error);
        res.status(501).json({
            data: {},
            success: false,
            message: "Internal Server Error!",
            err: error
        });
    }
}

module.exports = {
    create,
    get,
    getAll
}