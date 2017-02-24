var app = require('../app');
var chai = require('chai');
var request = require('supertest');
var expect = chai.expect;

describe('Users', function() {
  it('should return a 200 response', function(done) {
    request(app)
      .get('/users')
      .end(function(err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});
