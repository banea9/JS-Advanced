function validate() {
    let email = document.querySelector('#email');
    const regex = /[a-z]+@[a-z]+\.[a-z]+/gm;
    const emailValidation = function (ev) {
        if (!(regex.test(ev.target.value))) {
            email.classList.add('error')
        }
        else {
            email.classList.remove('error')
        }
    }
    email.addEventListener('change', emailValidation);
}
