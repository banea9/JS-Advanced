let expect = require('chai').expect;

function createCalculator() {
    let value = 0;
    return {
        add: function (num) { value += Number(num); },
        subtract: function (num) { value -= Number(num); },
        get: function () { return value; }
    }
}

let calc = createCalculator();


describe('createCalculator', function () {
    let calc;

    beforeEach(function () {
        calc = createCalculator();
    });

    it('should return 0 for get before any add or subtrack methods', function () {
        let value = calc.get();
        expect(value).to.be.equal(0);
    });

    it('should return 5 for get() after add(5)', function () {
        calc.add(5)
        let value = calc.get();
        expect(value).to.be.equal(5);
    });

    it('should return -10 for get() after subtrack(10)', function () {
        calc.subtract(10)
        let value = calc.get();
        expect(value).to.be.equal(-10);
    });

    it('should return -10 for get() after subtrack("10") - using string parameter', function () {
        calc.subtract('10')
        let value = calc.get();
        expect(value).to.be.equal(-10);
    });

    it('should return 1.1 for get() after add(5.0) and subtract(3.9)', function () {
        calc.add(5.0);
        calc.subtract(3.9)
        let value = calc.get();
        expect(value).to.be.equal(1.1);
    });

    it('should return -1.1 for get() after subtract(5.0) and add(3.9)', function () {
        calc.subtract(5.0);
        calc.add(3.9)
        let value = calc.get();
        expect(value).to.be.equal(-1.1);
    });

    it("should return 2 after add(10); subtract('7'); add('-2'); subtract(-1)", function () {
        calc.add(10);
        calc.subtract('7');
        calc.add('-2');
        calc.subtract(-1);
        let value = calc.get();
        expect(value).to.be.equal(2);
    });
    
    it('should return NaN for invalid parameter', function () {
        calc.add('asd')
        let value = calc.get();
        expect(value).to.be.NaN;
    });
    
});