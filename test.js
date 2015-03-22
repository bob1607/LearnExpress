var request = require('supertest');
var app = require('./app');

describe('Requests to the root path', function() {

    it('Returns a 200 status code', function(done) {

        request(app)
            .get('/')
            .expect(200, done);

    });

    it('Returns a HTML format', function(done) {

        request(app)
            .get('/')
            .expect('Content-Type', /html/, done);
    });

});

describe('Requests to /contacts Path', function() {

    it('Returns a 200 status code', function(done) {
        request(app)
            .get('/contacts')
            .expect(200, done);
    });

    it('Returns a JSON format', function(done) {
        request(app)
            .get('/contacts')
            .expect('Content-type', /json/, done);
    });

});