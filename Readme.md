# Flights Search Service

## Project Setup
- Clone the Project on your local
- Run `npm i` on the root directory to install dependencies
- Create the `.env` file in the root
- Add the following environment variables

    - `PORT = 3000`

- Inside `src/config` create your mysql configuration as `config.json` with following json snippet.

```
{
  "development": {
    "username": "root",
    "password": <YourPassword>,
    "database": <YourDatabaseName>,
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```