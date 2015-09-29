/**
 * Created by deepaksisodiya on 20/09/15.
 */


var express = require('express'),
    router = express.Router(),
    userController = require('./controller.js');

router.post('/users', userController.saveUser);

router.get('/users', userController.getAllUsers);

router.delete('/users/:userId', userController.deleteUser);

router.put('/users/:userId', userController.updateUser);

module.exports = router;