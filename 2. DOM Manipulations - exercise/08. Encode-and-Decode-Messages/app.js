function encodeAndDecodeMessages() {
    const SELECTORS = {
        textareas: 'div textarea',
        buttons: 'div button',
    };

    const areas = [...document.querySelectorAll(SELECTORS.buttons)];
    
    const encode = function (ev) {
        let encodedMessage = ''
        const textareaParent = ev.target.parentNode;
        const message = textareaParent.querySelector(SELECTORS.textareas).value.split('');
        message.forEach(element => {
            element = String.fromCharCode(element.charCodeAt(0) + 1);
            encodedMessage = encodedMessage + element
        });
        textareaParent.querySelector(SELECTORS.textareas).value = '';
        document.querySelectorAll(SELECTORS.textareas)[1].value = encodedMessage;
    }
    
    const decode = function (ev) {
        let decodedMessage = ''
        const textareaParent = ev.target.parentNode;
        const message = textareaParent.querySelector(SELECTORS.textareas).value.split('');
        message.forEach(element => {
            element = String.fromCharCode(element.charCodeAt(0) - 1);
            decodedMessage = decodedMessage + element
        });
        textareaParent.querySelector(SELECTORS.textareas).value = decodedMessage;
    }

    areas[0].addEventListener('click', encode)
    areas[1].addEventListener('click', decode)

}