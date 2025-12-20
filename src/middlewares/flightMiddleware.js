const { ClientErrors } = require("../utils/errorCodes.js")

const validateCreateFlight = (req, res, next) => {
    const body = req.body;

    if (!body.flightNumber || !body.airplaneId || !body.departureAirportId || !body.arrivalAirportId || !body.arrivalTime || !body.departureTime || !body.price) {
        return res.status(ClientErrors.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Invalid Request Body!",
            err: "Missing Required Fields!"
        })
    }

    next();
}

module.exports = {
    validateCreateFlight
}