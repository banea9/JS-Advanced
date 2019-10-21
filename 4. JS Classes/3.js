function createInstaces() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
    
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    
    }
    
    let arr = [];
    const personAnna = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    arr.push(personAnna)
    const personSoftuni = new Person('Anna');
    arr.push(personSoftuni)
    const personStephan = new Person('Stephan', 'Johnson', 25);
    arr.push(personStephan)
    const personGabriel = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    arr.push(personGabriel)

    return arr;
}