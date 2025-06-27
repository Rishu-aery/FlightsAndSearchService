class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            throw new Error("Somthing went wrong in crud repo!");
        }
    }

    async destroy(id) {
        try {
            const result = await this.model.destroy(id);
            return result;
        } catch (error) {
            throw new Error("Somthing went wrong in crud repo!");
        }
    }

    async get(id) {
        try {
            const result = await this.model.findByPk(id);
            return result;
        } catch (error) {
            throw new Error("Somthing went wrong in crud repo!");
        }
    }

    async getAll() {
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            throw new Error("Somthing went wrong in crud repo!");
        }
    }

    async update(id, data) {
        try {
            const result = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return result;
        } catch (error) {
            throw new Error("Somthing went wrong in crud repo!");
        }
    }
}

module.exports = CrudRepository;