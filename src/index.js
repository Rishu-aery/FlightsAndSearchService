// const express = require("express");
// const bodyParser = require("body-parser");

// const { PORT } = require("./config/serverConfig.js");
// // const apiRoutes = require("./routes/index.js");
// // const CityController = require("./controllers/cityController.js")

// const setupAndStartServer = async () => {
//   const app = express();

//   app.use(bodyParser.json);
//   app.use(bodyParser.urlencoded({ extended: true }));

//   console.log("Api routes---------");
//   app.post("/api/v1/city", async (req, res) => {
//     try {
//         console.log("request----------", req.body);
//         const { name } = req.body;
//         const city = await cityService.createCity(name);
//         res.status(201).json({
//             data: city,
//             success: true,
//             message: "City created successfully!",
//         });
//     } catch (error) {
//       console.log("Error:", error);
//       res.status(501).json({
//         data: {},
//         success: false,
//         message: "Internal Server Error!",
//         err: error,
//       });
//     }
//   });

//   app.get("/api/v1/city", async (req, res) => {
//     console.log("Get all cities request received");
//     res.status(200).json({
//       data: [],
//       success: true,
//       message: "List of all cities",
//     });
//   });
//   // app.use('/api', apiRoutes);

//   app.listen(() => {
//     console.log(`Server running at Port: ${PORT}`);
//   });
// };

// setupAndStartServer();


var express = require('express');


const setupAndStartServer = async () => {

  var app = express();

  app.get('/', function (req, res) {
    console.log('Received a GET request on /');
    res.send('Hello World!'); // This will serve your request to '/'.
  });

  app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
  });
}

setupAndStartServer();