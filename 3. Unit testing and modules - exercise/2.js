let expect = require('chai').expect;

function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

// unit tests
describe('isOddOrEven', function () {
    it('should return undefined due to invalid parameter', function () {
        expect(isOddOrEven(34)).to.be.equal(undefined);
    });
    it('should return even due to parameter with even length', function() {
        expect(isOddOrEven('test')).to.be.equal('even');
    })
    it('should return odd due to parameter with odd length', function() {
        expect(isOddOrEven('tests')).to.be.equal('odd');
    })

})