# Flights Search Service

## Project Setup
- Clone the Project on your local
- Run `npm i` on the root directory to install dependencies
- Create the `.env` file in the root
- Add the following environment variables

    - `PORT = 3000`
    - `SYNC_DB = false` : true if ypu want to sync your db using sequelize

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

Once you have added your db config as mentioned above, go to the src directory in your terminal and run following commands:

- `npx sequelize db:create` to create the database
- `npx sequelize-cli model:generate --name <YOUR_TABLE_NAME> --attributes <YOUR_TABLE_ATTRIBUTES>` to create a model
- `npx sequelize db:migrate` to run the migrations