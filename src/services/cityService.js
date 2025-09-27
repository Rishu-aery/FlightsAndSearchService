const { CityRepository } = require("../repository/index.js");
const CrudService = require("./crudService.js");

class CityService extends CrudService {
    constructor() {
        super(CityRepository);
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