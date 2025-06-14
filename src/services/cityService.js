const { CityRepository } = require("../repository/index.js");

class CityService {
    constructor() {
        this.cityRepository = CityRepository;
    }

    async createCity(name) {
        try {
            const city = await this.cityRepository.createCity(name);
            return city;
        } catch (error) {
            console.log('Error creating city:', error);
            throw (error);
        }
    }

    async deleteCityById(cityId) {
        try {
            const city = await this.cityRepository.deleteCityById(cityId);
            return city;
        } catch (error) {
            console.log('Error deleting city:', error);
            throw (error);
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log('Error updating city:', error);
            throw (error);
        }
    }

    async getCityById(cityId) {
        try {
            const city = await this.cityRepository.getCityById(cityId);
            return city;
        } catch (error) {
            console.log('Error fetching city:', error);
            throw (error);
        }
    }

    async getAllCity() {
        try {
            const city = await this.cityRepository.getAll();
            return city;
        } catch (error) {
            console.log('Error fetching city list:', error);
            throw (error);
        }
    }
}

module.exports = CityService;