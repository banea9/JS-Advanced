let assert = require('chai').assert;
let expect = require('chai').expect;
function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

describe('isSymmetric', function () {
    it('checks input parameter', function () {
        let arr = [1, 2, 3];
        let isArray = Array.isArray(arr);
        assert.equal(isArray, true);
    });
    it('returns false for non-array parameter', function () {
        let input = 'asd';
        let isArray = Array.isArray(input);
        assert.equal(isArray, false);
    })
    it('returns true for symmetric array', function () {
        let arr = [1, 2, 3, 2, 1];
        let symmetric = isSymmetric(arr);
        assert.equal(symmetric, true);
    })
    it('returns false for non-symmetric array', function () {
        let arr = [1, 2, 3, 3, 1];
        let symmetric = isSymmetric(arr);
        assert.equal(symmetric, false);
    })
    it("should return true for [-1,2,-1]", function () {
        expect(isSymmetric([-1,2,-1])).to.be.equal(true);
    });
    it("should return false for [-1,2,1]", function () {
        expect(isSymmetric([-1,2,1])).to.be.equal(false);
    });
    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.equal(true);
    });
    it("should return false for [5,'hi',{a:5},new Date(),{X:5},'hi',5]", function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{X:5},'hi',5])).to.be.equal(false);
    });
    it("should return true for [1]", function () {
        expect(isSymmetric([1])).to.be.equal(true);
    });
    it("should return false for 1,2,2,1", function () {
        expect (isSymmetric(1,2,2,1)).to.be.equal(false);
    });
})