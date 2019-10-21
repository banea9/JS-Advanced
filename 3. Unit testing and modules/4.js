let assert = require('chai').assert;
function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

describe('sum', function () {
    it('check parameter', function () {
        let arr = [1,2,3,4,5];
        let result = Array.isArray(arr);
        assert.equal(result, true);
    })
    it('check functionality of sum function', function () {
        let arr = [1,2,3,4,5];
        let result = sum(arr)
        assert.equal(result, 15);
    })
    it('check if all params are numbers', function () {
        let arr = [1,2,'3',4,5];
        let isNum = true;
        for(let i = 0; i < arr.length; i++) {
            if(typeof arr[i] !== 'Number') {
                isNum = false;
            }
        }
        assert.equal(isNum, false);
    })
})