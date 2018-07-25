const assert = require('assert');
const request = require('supertest');

const app = require('../app');


describe('The express app' ,()=>{
    it ('Handle a GET request to /api', (done)=>{ // Async request
        request(app)
            .get ('/api') // make an get request to /api
            .end((err, response)=>{ // receive err and response
                // err means actual errors, not status response
                assert(response.body.message === 'hi there');
                done();

            })
    });
});