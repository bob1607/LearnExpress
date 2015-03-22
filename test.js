var request = require('supertest');
var app = require('./app');

describe("Request to Root Path", function(){

    it("Returns a 200 status code", function(done){

        request(app)
            .get("/")
            .expect(200, done);

    });

});