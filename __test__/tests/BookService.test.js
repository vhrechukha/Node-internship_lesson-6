const chai = require('chai');

const UtilService = require('../../src/components/Books/service');

const { expect } = chai;

describe('BookComponent -> service', () => {
    it('BookComponent -> service -> getChartData', (done) => {
        UtilService.getChartData()
            .then((body) => {
                const expectBody = expect(body);
                expectBody.to.be.an('array');
                done();
            })
            .catch(done);
    });
});
