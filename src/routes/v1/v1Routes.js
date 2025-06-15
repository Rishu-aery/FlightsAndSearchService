const express = require("express");
const router = express.Router();

const CityController = require("../../controllers/cityController.js");

router.post("/cities", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.put("/city/:id", CityController.update);

module.exports = router;