class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString,
            this.innerLength = innerLength
    }

    increase(length) {
        return this.innerLength += length;
    }

    decrease(length) {
        if (this.innerLength - length < 0) {
            return this.innerLength = 0;
        }
        return this.innerLength -= length;
    }

    toString() {
        if(this.innerString.length > this.innerLength) {
            this.innerString = this.innerString.substr(0, this.innerLength);
            this.innerString += '...';
            return this.innerString;
        }
        return this.innerString.substr(0, this.innerLength)
    }
}

