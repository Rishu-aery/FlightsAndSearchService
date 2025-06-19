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

module.exports = {
    create
}