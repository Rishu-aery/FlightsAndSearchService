const express = require("express");
const bodyParser = require("body-parser");

const { PORT, SYNC_DB } = require("./config/serverConfig.js");
const apiRoutes = require("./routes/index.js");
const db = require("./models/index.js");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/api', apiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server running at Port: ${PORT}`);

    if (SYNC_DB) {
      db.sequelize.sync({alter: true});
    }
  });
};

setupAndStartServer();