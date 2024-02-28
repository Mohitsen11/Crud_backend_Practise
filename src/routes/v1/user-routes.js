const express = require('express');
const { UserController } = require('../../controllers');

const router = express.Router();

router 
    .post('/', UserController.userCreation);

router
    .delete('/', UserController.userDeletion);

router
    .get('/', UserController.userGetting);

router
    .put('/', UserController.userUpdater);

module.exports = router;