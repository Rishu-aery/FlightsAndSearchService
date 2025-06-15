const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    PORT: process.env.PORT ? process.env.PORT : 3000,
    SYNC_DB: process.env.SYNC_DB === "true"? true : false 
}