let expect = require('chai').expect;

class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for (let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }

    toString() {
        return this._stringArray.join('');
    }
}

describe('string builder', function () {
    it('should have attached all functions to its prototype', function () {
        expect(StringBuilder.prototype.hasOwnProperty('append')).to.be.equal(true);
        expect(StringBuilder.prototype.hasOwnProperty('prepend')).to.be.equal(true);
        expect(StringBuilder.prototype.hasOwnProperty('remove')).to.be.equal(true);
        expect(StringBuilder.prototype.hasOwnProperty('insertAt')).to.be.equal(true);
        expect(StringBuilder.prototype.hasOwnProperty('toString')).to.be.equal(true);
    });

    it('_stringArray must be array ', function () {
        let str = new StringBuilder();
        expect(Array.isArray(str._stringArray)).to.be.equal(true);
    });
    
    it('should return empty obj if parameter is not defined ', function () {
        let newString = new StringBuilder();
        expect(newString._stringArray.length).to.be.equal(0);
    });

    it('should test the length ', function () {
        let newString = new StringBuilder('test');
        expect(newString._stringArray.length).to.be.equal(4);
    });

    it('should test append function', function () {
        let newString = new StringBuilder('test');
        newString.append('ing')
        expect(newString._stringArray.join('')).to.be.equal('testing');
    });

    it('should test prepend function', function () {
        let newString = new StringBuilder('-test');
        newString.prepend('new')
        expect(newString._stringArray.join('')).to.be.equal('new-test');
    });

    it('Test insertAt function', function () {
        let str = new StringBuilder('s');
        str.insertAt('st',0);
        expect(str._stringArray.join('')).to.be.equal('sts');
        expect(str._stringArray.length).to.be.equal(3);
    });

    it('should test remove function', function () {
        let newString = new StringBuilder('tester');
        newString.remove(2,2);
        expect(newString._stringArray.join('')).to.be.equal('teer');
    });

    it('Test toString function', function () {
        let str = new StringBuilder('str');
        str.append('newStr');
        str.remove(0,1);
        str.append('testnewstr');
        expect(str.toString()).to.be.equal('trnewStrtestnewstr');
    });

    it('throws error for wront parameter type', function () {
        let newString;
        let throwError = () => newString = new StringBuilder(12);
        expect(throwError).to.throw()
    });

    it('Should throw error if param is not string type', function () {
        let str = new StringBuilder();
        let throwError = () => str.append(5);
        expect(throwError).to.throw();
    });
});