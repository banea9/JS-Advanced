class instanceValidator {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(id) {
        if (typeof id !== 'string') {
            throw new TypeError('Client ID must be a 6-digit number')
        }

        let regexChecker = /^\d{6}$/gm;
        if (!regexChecker.test(id)) {
            throw new TypeError('Client ID must be a 6-digit number')
        }
        this._clientId = id;
    }

    get email() {
        return this._email;
    }

    set email(newEmail) {
        let emailRegex = /[A-Za-z]+@([A-Za-z\.]+)/gm;
        if (!emailRegex.test(newEmail)) {
            throw new TypeError('Invalid e-mail')
        }
        this._email = newEmail;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(fName) {
        if (fName.length < 3 || fName.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }
        let regexValidator = /^[A-Za-z]+$/gm;
        if (!regexValidator.test(fName)) {
            throw new TypeError('First name must contain only Latin characters');
        }

        this._firstName = fName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lName) {
        if (lName.length < 3 || lName.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }
        let regexValidator = /^[A-Za-z]+$/gm;
        if (!regexValidator.test(lName)) {
            throw new TypeError('Last name must contain only Latin characters');
        }

        this._lastName = lName;
    }
}
