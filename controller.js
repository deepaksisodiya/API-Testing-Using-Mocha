/**
 * Created by deepaksisodiya on 20/09/15.
 */


var exports = module.exports = {};

var mongoose = require('mongoose');

var Users = mongoose.model('Users');

exports.saveUser = function (req, res) {
    var User = new Users(req.body);
    User.save(function (err) {
        if(err) {
            return res.status(500).json({'error' : 'error in saving user'});
        } else {
            res.json(User);
        }
    });
};

exports.getAllUsers = function (req, res) {
    Users.find({}, function (err, users) {
        if(err) {
            return res.status(500).json({'error' : 'error in fetching users'});
        }
        res.json(users);
    })
};

exports.deleteUser = function (req, res) {
    Users.findByIdAndRemove(req.params.userId, function (err) {
        if(err) {
            return res.status(500).json({'error':'error while deleting user'});
        }
        res.json({'status':'user deleted successfully'});
    });
};

exports.updateUser = function (req, res) {
    Users.findByIdAndUpdate(req.params.userId, req.body, {new : true}, function (err, user) {
        if(err) {
            return res.status(500).json({'error':'error while updating user'});
        }
        res.json(user);
    });
};