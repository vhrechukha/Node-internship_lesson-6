const request = require('supertest');
const chai = require('chai');

const server = require('../../src/server/server');

const { expect } = chai;

describe('BookComponent -> controller', () => {
    describe('BookComponent -> controller -> /v1/books/', () => {
        it('Get data [200]', (done) => {
            request(server)
                .get('/v1/books/')
                .expect('Content-Type', /json/)
                .expect(200)
                .then(({ body }) => {
                    const expectBody = expect(body);
                    expectBody.to.have.property('data').and.to.be.a('array');

                    done();
                })
                .catch((err) => done(err));
        });
    });
});
