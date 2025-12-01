# ✈️ Flights and Search Service

A comprehensive microservice for handling flight search and booking operations with CRUD functionality for cities, airports, airplanes, and flights.

## 🚀 Features

- **City Management**: Create, read, update, and delete cities
- **Airport Management**: Manage airports with city associations
- **Airplane Management**: Handle airplane models and capacity information
- **Flight Management**: Complete flight CRUD operations with search capabilities
- **RESTful API**: Well-structured API endpoints with proper routing
- **Database Migrations**: Sequelize-based database schema management
- **Modular Architecture**: Clean separation of concerns with repositories, services, and controllers

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL
- **ORM**: Sequelize
- **Environment**: dotenv
- **Development**: Nodemon

## 📋 Prerequisites

- Node.js (v14 or higher)
- MySQL Server
- npm or yarn package manager

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd FlightsAndSearchService
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory and add the following variables:

```env
PORT=3000
SYNC_DB=false
```

> **Note**: Set `SYNC_DB=true` only if you want to sync your database using Sequelize (⚠️ This will drop existing tables)

### 4. Database Configuration
Create `config.json` inside `src/config/` directory with your MySQL configuration:

```json
{
  "development": {
    "username": "root",
    "password": "your_mysql_password",
    "database": "flights_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "your_mysql_password",
    "database": "flights_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

### 5. Database Setup
Navigate to the `src` directory and run the following commands:

```bash
cd src

# Create the database
npx sequelize db:create

# Run migrations to create tables
npx sequelize db:migrate

# (Optional) Run seeders to populate initial data
npx sequelize db:seed:all
```

### 6. Start the Application
```bash
npm start
```

The server will start on `http://localhost:3000`

## 📊 Database Schema

### Tables & Relationships

#### 🏙️ City
| Field | Type | Constraints |
|-------|------|-------------|
| id | INTEGER | Primary Key, Auto Increment |
| name | STRING | Not Null |
| createdAt | DATE | Auto Generated |
| updatedAt | DATE | Auto Generated |

#### 🛫 Airport
| Field | Type | Constraints |
|-------|------|-------------|
| id | INTEGER | Primary Key, Auto Increment |
| name | STRING | Not Null |
| cityId | INTEGER | Foreign Key → City.id |
| createdAt | DATE | Auto Generated |
| updatedAt | DATE | Auto Generated |

**Relationship**: City hasMany Airports, Airport belongsTo City (1:M)

#### ✈️ Airplane
| Field | Type | Constraints |
|-------|------|-------------|
| id | INTEGER | Primary Key, Auto Increment |
| modelNumber | STRING | Not Null |
| capacity | INTEGER | Not Null |
| createdAt | DATE | Auto Generated |
| updatedAt | DATE | Auto Generated |

#### 🛩️ Flights
| Field | Type | Constraints |
|-------|------|-------------|
| id | INTEGER | Primary Key, Auto Increment |
| flightNumber | STRING | Not Null, Unique |
| airplaneId | INTEGER | Foreign Key → Airplane.id |
| departureAirportId | INTEGER | Foreign Key → Airport.id |
| arrivalAirportId | INTEGER | Foreign Key → Airport.id |
| arrivalTime | DATETIME | Not Null |
| departureTime | DATETIME | Not Null |
| price | INTEGER | Not Null |
| boardingGate | STRING | Nullable |
| totalSeats | INTEGER | Not Null |
| createdAt | DATE | Auto Generated |
| updatedAt | DATE | Auto Generated |

## 🔧 Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the application with nodemon |
| `npm test` | Run test suite (currently not implemented) |
| `npm run find-circular-deps` | Check for circular dependencies |

## 🏗️ Project Structure

```
src/
├── config/                 # Database and server configuration
│   ├── config.json        # Sequelize database config
│   └── serverConfig.js    # Server configuration
├── controllers/           # Request handlers
│   ├── airportController.js
│   ├── cityController.js
│   ├── flightController.js
│   └── index.js
├── migrations/           # Database migration files
├── models/              # Sequelize models
│   ├── airplane.js
│   ├── airport.js
│   ├── city.js
│   ├── flights.js
│   └── index.js
├── repository/          # Data access layer
│   ├── airplaneRepository.js
│   ├── airportRepository.js
│   ├── cityRepository.js
│   ├── crudRepository.js
│   ├── flightRepository.js
│   └── index.js
├── routes/              # API route definitions
│   ├── index.js
│   └── v1/
│       └── v1Routes.js
├── seeders/             # Database seed files
├── services/            # Business logic layer
│   ├── airportService.js
│   ├── cityService.js
│   ├── crudService.js
│   ├── flightService.js
│   └── index.js
├── utils/               # Utility functions
│   └── helperMethod.js
└── index.js            # Application entry point
```

## 🔄 Architecture

The project follows a layered architecture pattern:

- **Controllers**: Handle HTTP requests and responses
- **Services**: Contain business logic and validation
- **Repositories**: Handle data access and database operations
- **Models**: Define database schema and relationships
- **Routes**: Define API endpoints and middleware

## 🚀 API Endpoints

### Cities
- `GET /api/v1/cities` - Get all cities
- `GET /api/v1/cities/:id` - Get city by ID
- `POST /api/v1/cities` - Create new city
- `PUT /api/v1/cities/:id` - Update city
- `DELETE /api/v1/cities/:id` - Delete city

### Airports
- `GET /api/v1/airports` - Get all airports
- `GET /api/v1/airports/:id` - Get airport by ID
- `POST /api/v1/airports` - Create new airport
- `PUT /api/v1/airports/:id` - Update airport
- `DELETE /api/v1/airports/:id` - Delete airport

### Flights
- `GET /api/v1/flights` - Get all flights with search filters
- `GET /api/v1/flights/:id` - Get flight by ID
- `POST /api/v1/flights` - Create new flight
- `PUT /api/v1/flights/:id` - Update flight
- `DELETE /api/v1/flights/:id` - Delete flight

## 🧪 Development

### Creating New Models
```bash
cd src
npx sequelize-cli model:generate --name <MODEL_NAME> --attributes <ATTRIBUTES>
```

### Creating Migrations
```bash
npx sequelize-cli migration:generate --name <migration-name>
```

### Creating Seeders
```bash
npx sequelize-cli seed:generate --name <seeder-name>
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests (when available)
5. Submit a pull request

## 📝 License

ISC

## 👥 Author

[Add your name and contact information]

---

For any questions or support, please refer to the documentation or create an issue in the repository.  