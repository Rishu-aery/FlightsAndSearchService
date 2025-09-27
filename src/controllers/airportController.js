const { AirportService } = require("../services/index.js");

const airport = new AirportService();

const create = async (req, res) => {
    try {
        const body = req.body;
        const city = await airport.create(body);
        res.status(201).json({
            data: city,
            success: true,
            message: "Airport created successfully!",
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