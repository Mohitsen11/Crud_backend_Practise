const CrudRepository = require('./crud-repository');
const { Employee } = require('../models');

class UserRepository extends CrudRepository{
    constructor(){
        super(Employee);
    }
}

module.exports = UserRepository;