"use strict";

var request = require('supertest');
require('../../index');
require('should');
var server = request.agent("http://localhost:3000");

describe('Task routes', function () {
    describe('GET /products', function () {
        it('should return statusCode 200', function (done) {
            server
                .get('/products')
                .expect("Content-type", /json/)
                .expect(200)
                .end(function (err, res) {
                    res.status.should.equal(200);
                    res.body.length.should.equal(10000);
                    done();
                });
        });
        it('should return product [ACADEMY BROOKLYN]', function (done) {
            server
                .get('/products/100')
                .expect("Content-type", /json/)
                .expect(200)
                .end(function (err, res) {
                    res.status.should.equal(200);
                    res.body.length.should.equal(1);
                    res.body[0].title.should.equal('ACADEMY BROOKLYN');
                    done();
                });
        });
        //
        // it('should return error', function (done){
        // 	server
        // 		.get('/products/a00')
        // 		.expect("Content-type", /json/)
        // 		.expect(200)
        // 		.end(function(err,res){
        // 			err.should.notnull;
        // 			res.status.should.equal(500);
        // 			done();
        // 		});
        // });
    });
});
