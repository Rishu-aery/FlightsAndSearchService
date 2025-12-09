const validateCreateFlight = (req, res, next) => {
    const body = req.body;

    if (!body.flightNumber || !body.airplaneId || !body.departureAirportId || !body.arrivalAirportId || !body.arrivalTime || !body.departureTime || !body.price) {
        return res.status(400).json({
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