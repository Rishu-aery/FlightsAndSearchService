const express = require("express");
const bodyParser = require("body-parser");
const CityRepository = require("./repository/cityRepository.js");

const { PORT } = require("./config/serverConfig.js")

const setupAndStartServer = async () => {

    const app = express();

    app.use(bodyParser.json);
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(() => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

setupAndStartServer();