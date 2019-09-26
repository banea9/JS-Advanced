function solve(arr) {
    console.log(arr.reduce((a,b) => Math.max(a,b)))
}
solve([10, 20, 5])