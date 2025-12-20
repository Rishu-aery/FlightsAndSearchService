const { FlightService } = require("../services/index.js");
const { SuccessCodes } = require("../utils/errorCodes.js")

const flightService = new FlightService();

// POST -> /flight
const create = async (req, res) => {
    try {
        const body = req.body
        const flightRequestData = {
            flightNumber: body.flightNumber,
            airplaneId: body.airplaneId,
            departureAirportId: body.departureAirportId,
            arrivalAirportId: body.arrivalAirportId,
            arrivalTime: body.arrivalTime,
            departureTime: body.departureTime,
            price: body.price,
            boardingGate: body.boardingGate
        }
        const flight = await flightService.createFlight(flightRequestData);
        res.status(SuccessCodes.CREATED).json({
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
        res.status(SuccessCodes.OK).json({
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
        res.status(SuccessCodes.OK).json({
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