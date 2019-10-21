const PaymentPackage = require('./8').PaymentPackage;
const expect = require('chai').expect;

describe('Test class PaymenetPackage', function () {

    describe('test the constructor', function () {
        it('should create instance for appropriate paramets', function () {
            let package = new PaymentPackage('test', 123);
            expect(package instanceof PaymentPackage).to.be.true;
        });

        it('should create properties with correct values', function () {
            let package = new PaymentPackage('testing', 12);
            expect(package.hasOwnProperty('_name')).to.be.equal(true);
            expect(package.hasOwnProperty('_value')).to.be.equal(true)
            expect(package.hasOwnProperty('_VAT')).to.be.equal(true)
            expect(package.hasOwnProperty('_active')).to.be.equal(true);
        });

        it('should create properties with correct values', function () {
            let package = new PaymentPackage('testing', 12);
            expect(package._name).to.be.equal('testing');
            expect(package._value).to.be.closeTo(12, 0.01)
            expect(package._VAT).to.be.closeTo(20, 0.01)
            expect(package._active).to.be.equal(true);
        });

        it('should throw error with incorrect type of parameters', function () {
            let package;
            expect(() => package = new PaymentPackage(123, 123)).to.throw(Error);
            expect(() => package = new PaymentPackage('123', '123')).to.throw(Error);
            expect(() => package = new PaymentPackage({}, {})).to.throw(Error);
            expect(() => package = new PaymentPackage([], [])).to.throw(Error);
            expect(() => package = new PaymentPackage('asd', [])).to.throw(Error);
            expect(() => package = new PaymentPackage([], 12)).to.throw(Error);
            expect(() => package = new PaymentPackage(12, {})).to.throw(Error);
            expect(() => package = new PaymentPackage('asdd', undefined)).to.throw(Error);
            expect(() => package = new PaymentPackage(undefined, undefined)).to.throw(Error);
            expect(() => package = new PaymentPackage('asdsa', -10)).to.throw(Error);
            expect(() => package = new PaymentPackage(null, 15)).to.throw(Error);
            expect(() => package = new PaymentPackage({}, 22)).to.throw(Error);
        });

    })

    describe('Test name accessors', function () {

        it('should return obj with valid name value with valid parameters', function () {
            let package = new PaymentPackage('test', 12);
            expect(package._name).to.be.equal('test');
            expect(package.name).to.be.equal('test');
            expect(package.hasOwnProperty('_name')).to.be.equal(true);
        });

        it('should change the name to be equal to asd', function () {
            let package = new PaymentPackage('test', 12);
            package.name = 'asd';
            expect(package.name).to.be.equal('asd');
            expect(package._name).to.be.equal('asd');
        });

        it('should throw error with invalid parameter type', function () {
            let package = new PaymentPackage('test', 12);
            expect(() => package.name = {}).to.throw();
        });

    });

    describe('Test value accessors', function () {
        it('should return obj with valid values with valid parameters', function () {
            let package = new PaymentPackage('test', 12);
            expect(package._value).to.be.equal(12);
            expect(package.value).to.be.equal(12);
            expect(package.hasOwnProperty('_name')).to.be.equal(true);
        });

        it('should change the value to be equal to 123', function () {
            let package = new PaymentPackage('test', 12);
            package.value = 123;
            expect(package.value).to.be.equal(123);
            expect(package._value).to.be.equal(123);
        });

        it('should throw error with invalid parameter type', function () {
            let package = new PaymentPackage('test', 12);
            expect(() => package.value = '12345').to.throw()
        });

        it('should throw error with negative number for value', function () {
            let package = new PaymentPackage('test', 12);
            expect(() => package.value = -55).to.throw()
        });
    });


    describe('Test VAT accessors', function () {

        it('should return default value with valid input parameters', function () {
            let package = new PaymentPackage('test', 12);
            expect(package._VAT).to.be.closeTo(20, 0.01);
            expect(package.VAT).to.be.closeTo(20, 0.01);
            expect(package.hasOwnProperty('_VAT')).to.be.equal(true);
        });

        it('should change the VAT to be equal to 25', function () {
            let package = new PaymentPackage('test', 12);
            package.VAT = 25;
            expect(package._VAT).to.be.closeTo(25, 0.01);
            expect(package.VAT).to.be.closeTo(25, 0.01);
        });
     
        it('should throw error with invalid parameter type', function () {
            let package = new PaymentPackage('test', 12);
            expect(() => package.VAT = '12345').to.throw()
        });

        it('should throw error with negative number for value', function () {
            let package = new PaymentPackage('test', 12);
            expect(() => package.VAT = -55).to.throw()
        });

    });


    describe('Test active accessors', function () {
        
        it('should return default value with valid input parameters', function () {
            let package = new PaymentPackage('test', 12);
            expect(package._active).to.be.equal(true);
            expect(package.active).to.be.equal(true);
            expect(package.hasOwnProperty('_active')).to.be.equal(true);
        });

        it('should change the active to be equal to false', function () {
            let package = new PaymentPackage('test', 12);
            package.active = false;
            expect(package._active).to.be.equal(false);
            expect(package.active).to.be.equal(false);
        });
        
        it('should throw error with invalid parameter type', function () {
            let package = new PaymentPackage('test', 12);
            expect(() => package.active = [1,2,3,4,5]).to.throw();
        });
    });


    describe('Test toString method', function () {

    });

})