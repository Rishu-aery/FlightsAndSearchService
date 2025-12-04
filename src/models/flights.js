'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Airport, {
        foreignKey: "departureAirportId",
        onDelete: "RESTRICT"
      });
      this.belongsTo(models.Airport, {
        foreignKey: "arrivalAirportId",
        onDelete: "RESTRICT"
      });
      this.belongsTo(models.Airplane, {
        foreignKey: "airplaneId",
        onDelete: "RESTRICT"
      });
    }
  }
  Flights.init({
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    departureAirportId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    arrivalAirportId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    arrivalTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    departureTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    boardingGate: DataTypes.STRING,
    availableSeats: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Flights',
  });
  return Flights;
};