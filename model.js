/**
 * Created by deepaksisodiya on 20/09/15.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name : String,
    mobile : String
});

var exports = module.exports = {};

exports = mongoose.model('Users', UserSchema);