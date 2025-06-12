const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig.js");
// const apiRoutes = require("./routes/index.js");
// const CityController = require("./controllers/cityController.js")

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json);
  app.use(bodyParser.urlencoded({ extended: true }));

  console.log("Api routes---------");
  app.post("/api/v1/city", async (req, res) => {
    try {
        console.log("request----------", req.body);
        const { name } = req.body;
        const city = await cityService.createCity(name);
        res.status(201).json({
            data: city,
            success: true,
            message: "City created successfully!",
        });
    } catch (error) {
      console.log("Error:", error);
      res.status(501).json({
        data: {},
        success: false,
        message: "Internal Server Error!",
        err: error,
      });
    }
  });
  // app.use('/api', apiRoutes);

  app.listen(() => {
    console.log(`Server running at Port: ${PORT}`);
  });
};

setupAndStartServer();
