const { UserRepository } = require('../repositories');

const userRepository = new UserRepository();

async function userCreate(data){
    try {
        const user = await userRepository.createUser(data);
        return user;
    } catch (error) {
        throw error;
    }
}

async function userDelete(data){
    try{
        const response = await userRepository.deleteUser(data);
        return response;
    } catch(error){
        throw error;
    }
}

async function userGet(data){
    try {
        const response = await userRepository.getUser(data);
        return response;
    } catch (error) {
        throw error;
    }
}

async function userUpdate(id, data){
    try {
        const response = await userRepository.updateUser(id, data);
        return response;
    } catch (error) {
        throw error;
    }
}
module.exports = {
    userCreate,
    userDelete,
    userGet,
    userUpdate
}