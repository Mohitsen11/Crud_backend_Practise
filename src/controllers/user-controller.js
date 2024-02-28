const { UserService } = require('../services'); 
const { StatusCodes } = require("http-status-codes");

async function userCreation(req, res) {

    try{
        console.log(req.body.employeeName, req.body.employeeSalary);
        const user = await UserService.userCreate({
            employeeName: req.body.employeeName,
            employeeSalary: req.body.employeeSalary,
            employeeAge: req.body.employeeAge
        });

        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "User is successfully created",
            data: user,
            error: {}
        });
    } catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Failed to create a user",
            data: {},
            error: error
        });
    }
}

async function userDeletion(req, res){
        
    try {
        const deletedUser = await UserService.userDelete(req.body.id);

        return res.status(StatusCodes.NO_CONTENT).json({
            success: true,
            message: "User is deleted successfully",
            data: deletedUser,
            error: {}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Failed to deleted the user",
            data: {},
            error: error
        });
    }
}

async function userGetting(req, res){
    try {
        const user = await UserService.userGet(req.body.id);

        return res
                .status(StatusCodes.OK)
                .json({
                    success: true,
                    message: "User detail is fetched successfully",
                    data: user,
                    error: {}
        });
    } catch (error) {
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                    success: true,
                    message: "Failed to fetch User details",
                    data: {},
                    error: error
        });
    }
}

async function userUpdater(req, res){
    try {
        const updatedUser = await UserService.userUpdate(req.body.id, {
            employeeSalary: req.body.employeeSalary
        });

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "User updated successfully",
            data: updatedUser,
            error: {}
        });
    } catch (error) {
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                    success: true,
                    message: "Failed to update the user",
                    data: {},
                    error: error
        });
    }
}

module.exports = {
    userCreation,
    userDeletion,
    userGetting,
    userUpdater
}