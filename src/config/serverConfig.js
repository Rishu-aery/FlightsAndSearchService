const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    PORT: process.env.PORT ? process.env.PORT : 3000
}