/**
 * Created by deepaksisodiya on 29/09/15.
 */

var should = require('should');
var request = require('supertest');
var mongoose = require('mongoose');

describe('testing API', function () {

    before(function (done) {
        mongoose.connect('mongodb://localhost:27017/Mocha');
        done();
    });

    var _id;

    it('user should be saved into the database', function (done) {
        var user = {
            "name" : "piyush",
            "mobile" : "7879544770"
        };
        request('http://localhost:3001')
            .post('/users')
            .send(user)
            .end(function (err, res) {
                _id = res.body._id;
                res.body.name.should.equal('piyush');
                res.body.mobile.should.equal('7879544770');
                done();
            });
    });

    it('user should be update into the database', function (done) {
        var user = {
            "name" : "deepak"
        };
        request('http://localhost:3001')
            .put('/users/' + _id)
            .send(user)
            .end(function(err, res) {
                res.body.name.should.equal('deepak');
                done();
            });
    });

});