class List {
    constructor() {
        this.numbers = [];
        this.size = 0;
    }

    add(element) {
        this.numbers.push(element);
        this.size++
        this.numbers.sort((a, b) => a - b);
    }

    remove(index) {
        if (this.numbers.length > index && index >= 0) {
            this.numbers.splice(index, 1);
            this.size--
        }
    }

    get(index) {
        if (this.numbers.length < index || index >= 0) {
            return this.numbers[index];
        }
    }
    
}