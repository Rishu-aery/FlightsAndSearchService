const express = require("express");
const router = express.Router();

const { CityController, FlightController } = require("../../controllers/index.js");

router.post("/cities", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.put("/city/:id", CityController.update);

router.post("/flights", FlightController.create);

module.exports = router;