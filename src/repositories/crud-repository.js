const { Logger } = require('../config');
const { Op } = require('sequelize');

class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async createUser(data){
        try{
            const response = await this.model.create(data);
            return response;
        } catch(err){
            Logger.error("Something went wrong in the crud repo : createUser");
        }
    }

    async deleteUser(data){
        try{
            const response = await this.model.destroy({
                where : {
                    id: {
                        [Op.in]: data
                    }
                }
            });
            return response;
        } catch(error){
            Logger.error("Something went wrong in the crud repo: destroy");
        }
    }

    async getUser(data){
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the crud repo : getUser");
        }
    }

    async updateUser(id, data){
        try {
            const response = await this.model.update(data , {
                where : {
                    id: id
                }
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the crud repo : update");
        }
    }

}

module.exports = CrudRepository;