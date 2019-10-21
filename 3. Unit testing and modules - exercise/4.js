let expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

console.log(mathEnforcer.addFive(-7))

describe('mathEnforcer', function () {
    describe('addFive', function () {

        // valid cases

        it('should return 7 with parameter num = 2', function () {
            expect(mathEnforcer.addFive(2)).to.be.equal(7);
        });

        it('should return -2 with parameter num = -7', function () {
            expect(mathEnforcer.addFive(-7)).to.be.equal(-2);
        });

        it('should return 5 with parameter num = 0', function () {
            expect(mathEnforcer.addFive(0)).to.be.equal(5);
        });

        it('should return 7.5 with parameter num = 2.5', function () {
            expect(mathEnforcer.addFive(2.5)).to.be.equal(7.5);
        });

        // invalid cases

        it('should return undefined with parameter string', function () {
            expect(mathEnforcer.addFive('asd')).to.be.equal(undefined);
        });

        it('should return undefined with parameter object', function () {
            expect(mathEnforcer.addFive({ name: 'Unknown' })).to.be.equal(undefined);
        });
    });
    describe('subtractTen', function () {

        // valid cases
        it('should return sum of the number arg (floating number) subtrackTen()', function () {
            let num = 10.22;
            let numTwo = 10;
            let result = mathEnforcer.subtractTen(num, numTwo);
            expect(result).to.be.closeTo(0.22, 0.01);
        });

        it('should return -8 with parameter num = 2', function () {
            expect(mathEnforcer.subtractTen(2)).to.be.equal(-8);
        });

        it('should return -17 with parameter num = -7', function () {
            expect(mathEnforcer.subtractTen(-7)).to.be.equal(-17);
        });

        it('should return 2 with parameter num = 12', function () {
            expect(mathEnforcer.subtractTen(12)).to.be.equal(2);
        });

        it('should return -7.5 with parameter num = 2.5', function () {
            expect(mathEnforcer.subtractTen(2.5)).to.be.equal(-7.5);
        });

        // invalid cases

        it('should return undefined with parameter string', function () {
            expect(mathEnforcer.subtractTen('asd')).to.be.equal(undefined);
        });

        it('should return undefined with parameter object', function () {
            expect(mathEnforcer.subtractTen({ name: 'Unknown' })).to.be.equal(undefined);
        });
    });
    describe('sum', function () {
        it('should return sum of the number arg (floating number) and 5', function () {
            let num = 10.22;
            let numTwo = 5;
            let result = mathEnforcer.sum(num, numTwo);
            expect(result).to.be.closeTo(15.22, 0.01);
        });

        it('should return sum of the number arg (floating number) sum()', function () {
            let num = 10.22;
            let numTwo = 2.2
            let result = mathEnforcer.sum(num, numTwo);
            expect(result).to.be.closeTo(12.42, 0.01);
        })
        // valid cases

        it('should return 5 with parameters 2 and 3', function () {
            expect(mathEnforcer.sum(2, 3)).to.be.equal(5);
        });

        it('should return -5 with parameters -2 and -3', function () {
            expect(mathEnforcer.sum(-2, -3)).to.be.equal(-5);
        });

        it('should return 2 with parameters -2 and 10', function () {
            expect(mathEnforcer.sum(-2, 10)).to.be.equal(8);
        });

        it('should return 12.5 with parameters 2.5 and 10', function () {
            expect(mathEnforcer.sum(2.5, 10)).to.be.equal(12.5);
        });

        // invalid cases

        it('should return undefined with invalid first parameter', function () {
            expect(mathEnforcer.sum('asd', 10)).to.be.equal(undefined);
        });

        it('should return undefined with invalid second parameter', function () {
            expect(mathEnforcer.sum(5, { name: 'Unknown' })).to.be.equal(undefined);
        });

        it('should return undefined with both parameters invalid', function () {
            expect(mathEnforcer.sum({ name: 'Unknown' }, [1, 23, 4, 5])).to.be.equal(undefined);
        });
    });
});