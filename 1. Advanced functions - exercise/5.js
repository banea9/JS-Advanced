(function solve() {
    let result;
    return {
        add: (vec1, vec2) => {
            result = [vec1[0] + vec2[0], vec1[1] + vec2[1]];
            return result;
        },
        multiply: (vec1, num) => {
            result = [vec1[0] * num, vec1[1] * num];
            return result;
        },
        length: (vec1) => {
            result = Math.sqrt(vec1[0] * vec1[0] + vec2[0] * vec2[0]);
            return result;
        },
        dot: (vec1, vec2) => {
            result = vec1[0] * vec2[0] + vec1[1] * vec2[1];
            return result;
        },
        cross: (vec1, vec2) => {
            result = vec1[0] * vec2[1] - vec1[1] * vec2[0];
            return result;
        }
    }
})()
