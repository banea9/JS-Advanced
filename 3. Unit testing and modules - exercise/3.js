function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

console.log(lookupChar(' ', 0))

//unit tests

describe('lookupChar', function () {
    //invalid tests
    it('returns undefined due to first invalid parameter', function () {
        expect(lookupChar([1, 2, 3, 4], 1)).to.be.equal(undefined);
    });

    it('returns undefined due to second invalid parameter', function () {
        expect(lookupChar('Testing', '1')).to.be.equal(undefined);
    });

    it('returns undefined due to second invalid parameter', function () {
        expect(lookupChar('Testing', 5.15)).to.be.equal(undefined);
    });

    it('returns undefined due to both invalid parameters', function () {
        expect(lookupChar([1, 2, 3, 4], 'test')).to.be.equal(undefined);
    });

    it('returns incorrect index due to large index', function () {
        expect(lookupChar('Testing', 15)).to.be.equal('Incorrect index');
    });

    it('returns incorrect index due to large index', function () {
        expect(lookupChar('Testing', 7)).to.be.equal('Incorrect index');
    });

    it('returns incorrect index with empty string', function () {
        expect(lookupChar('', 0)).to.be.equal(undefined);
    });

    it('returns incorrect index due to negative index', function () {
        expect(lookupChar('Testing', -5)).to.be.equal('Incorrect index');
    });
    
    //valid test

    it('returns returns correct output', function () {
        expect(lookupChar('Testing', 1)).to.be.equal('e');
    });

    it('returns returns correct output', function () {
        expect(lookupChar(' ', 0)).to.be.equal(' ');
    });
    
})