function solve(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    }
    if(arr.length === 0){
        return 0;
    }
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex > arr.length) {
        endIndex = arr.length;
    }

    let sum = arr.slice(startIndex, endIndex + 1).map(Number).reduce((a,b) => a + b, 0);
    
    return sum;

}
console.log(solve([10, 20, 30, '40', '50', '60'], 3, 300));