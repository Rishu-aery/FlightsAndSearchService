class CrudService {
    constructor(repository) {
        this.repository = repository;
    }

    async create(data) {
        try {
            const result = await this.repository.create(data);
            return result;
        } catch (error) {
            throw new Error("Somthing went wrong in crud service!");
        }
    }

    async destroy(id) {
        try {
            const result = await this.repository.destroy(id);
            return result;
        } catch (error) {
            throw new Error("Somthing went wrong in crud service!");
        }
    }

    async get(id) {
        try {
            const result = await this.repository.get(id);
            return result;
        } catch (error) {
            throw new Error("Somthing went wrong in crud service!");
        }
    }

    async getAll() { 
        try {
            const result = await this.repository.getAll();
            return result;
        } catch (error) {
            throw new Error("Somthing went wrong in crud service!");
        }
    }

    async update(id, data) {
        try {
            const result = await this.repository.update(id, data);
            return result;
        } catch (error) {
            throw new Error("Somthing went wrong in crud repo!");
        }
    }
}

module.exports = CrudService;