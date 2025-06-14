// const CityService = require("../services/cityService.js");
const { CityService } = require("../services/index.js");

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const { name } = req.body;
        const city = await cityService.createCity(name);
        res.status(201).json({
            data: city,
            success: true,
            message: "City created successfully!",
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

// DELETE -> city/:id
const destroy = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await cityService.deleteCityById(id);
        res.status(200).json({
            data: response,
            success: true,
            message: "City deleted successfully!",
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

// GET -> city/:id
const get = async (req, res) => {
    try {
        const { id } = req.params;
        const city = await cityService.getCityById(id);
        res.status(200).json({
            data: city,
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

// GET -> /city
const getAll = async (req, res) => {
    try {
        const city = await cityService.getAllCity();
        res.status(200).json({
            data: city,
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

// PUT -> city/:id
const update = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const city = await cityService.updateCity(id, data);
        res.status(200).json({
            data: city,
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
    destroy,
    get,
    getAll,
    update
}