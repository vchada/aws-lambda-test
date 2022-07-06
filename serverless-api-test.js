var supertest = require('supertest');
var should = require('should');
var gateway = '';
var server = supertest.agent(gateway);

describe("serverless-api-test",function()
{
    it("serverless-api unit test should return response on get call", function(done)
    {
        server
        .get("/employees")
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err,res){
            res.status.should.equal(200);
            done();
        });
    });

});
