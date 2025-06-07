const { City } = require('../models/index.js');

class CityRepository {
    async createCity(name) {
        try {
            const city = await City.create({ name });
            console.log('City created:', city.id, city.name);
            return city;
        } catch (error) {
            console.error('Error creating city:', error);
            throw error;
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: { id: cityId}
            });  
        } catch (error) {
            console.error('Error deleting city:', error);
            throw error;  
        }
    }
}

module.exports = new CityRepository;
// This code defines a CityRepository class that interacts with the City model.