function solve(arr, string) {
	arr.sort((a, b) => {
		if (string === 'asc') {
			return a - b;
		}
		else if (string === 'desc') {
			return b - a;
		}
	})

	return arr;
}

