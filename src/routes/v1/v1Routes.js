const express = require("express");
const router = express.Router();

const { CityController, FlightController, AirportController } = require("../../controllers/index.js");
const { FlightMiddleware } = require("../../middlewares/index.js")

router.post("/cities", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.put("/city/:id", CityController.update);

router.post("/flights", FlightMiddleware.validateCreateFlight, FlightController.create);
router.get("/flight/:id", FlightController.get);
router.get("/flights", FlightController.getAll);

router.post("/airports", AirportController.create);
router.delete("/airport/:id", AirportController.destroy);
router.get("/airport/:id", AirportController.get);
router.get("/airports", AirportController.getAll);
router.put("/airport/:id", AirportController.update);


module.exports = router;