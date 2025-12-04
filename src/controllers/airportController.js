const { AirportService } = require("../services/index.js");

const airport = new AirportService();

const create = async (req, res) => {
    try {
        const body = req.body;
        const result = await airport.create(body);
        res.status(201).json({
            data: result,
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

// DELETE -> /airport/:id
const destroy = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await airport.destroy(id);
        res.status(201).json({
            data: result,
            success:true,
            message: "Airport deleted successfully"
        })
    } catch (error) {
        console.log("Error: ", error);
        res.status(501).json({
            data: {},
            success: false,
            message: "Internal Server Error!",
            err: error
        })
    }
}

// Get -> /airport/:id
const get = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await airport.get(id);
        res.status(201).json({
            data: result,
            success:true,
            message: "Airport fetched successfully"
        })
    } catch (error) {
        console.log("Error: ", error);
        res.status(501).json({
            data: {},
            success: false,
            message: "Internal Server Error!",
            err: error
        })
    }
}

// Get -> /airports
const getAll = async (req, res) => {
    try {
        const result = await airport.getAll();
        res.status(201).json({
            data: result,
            success:true,
            message: "Airports fetched successfully"
        })
    } catch (error) {
        console.log("Error: ", error);
        res.status(501).json({
            data: {},
            success: false,
            message: "Internal Server Error!",
            err: error
        })
    }
}

// Put -> /airport/:id
const update = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const result = await airport.update(id, body);
        res.status(201).json({
            data: result,
            success:true,
            message: "Airport Updated successfully"
        })
    } catch (error) {
        console.log("Error: ", error);
        res.status(501).json({
            data: {},
            success: false,
            message: "Internal Server Error!",
            err: error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    getAll,
    update
}