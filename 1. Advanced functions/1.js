function solve(arr) {
	console.log(`Sum = ${arr.reduce((a, b) => a + b)}`)
	console.log(`Min = ${arr.reduce((a,b) => Math.min(a,b))}`)
	console.log(`Max = ${arr.reduce((a,b) => Math.max(a,b))}`)
	console.log(`Product = ${arr.reduce((a, b) => a * b, 1)}`)
	console.log(`Join = ${arr.map(el => el.toString()).reduce((a, b) => a + b)}`)
}
solve([2, 3, 10, 5])