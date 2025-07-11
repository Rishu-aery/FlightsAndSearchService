const { CityRepository } = require("../repository/index.js");

class CityService {
    constructor() {
        this.cityRepository = CityRepository;
    }

    async createCity(cities) {
        try {
            if (Array.isArray(cities)) {
                const city = await this.cityRepository.createCity(cities);
                return city;
            } else {
                cities = [cities]
                const city = await this.cityRepository.createCity(cities);
                return city;
            }
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

    async getAllCity(filter) {
        try {
            const city = await this.cityRepository.getAll(filter);
            return city;
        } catch (error) {
            console.log('Error fetching city list:', error);
            throw (error);
        }
    }
}

module.exports = CityService;