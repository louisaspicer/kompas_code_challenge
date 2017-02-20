var app = require('../app');
var chai = require('chai');
var request = require('supertest');
var expect = chai.expect;

describe('Homepage', function() {
  it('should return a 200 response', function(done) {
    request(app)
      .get('/')
      .end(function(err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});
