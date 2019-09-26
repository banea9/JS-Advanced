function toggle() {
    
    const SELECTORS = {
        toggleableContent: '#extra',
        button: '.button'
    }
    const BUTTONTEXT = {
        more: 'More',
        less: 'Less'
    }

    if (document.querySelector(SELECTORS.button).textContent === BUTTONTEXT.more) {
        document.querySelector(SELECTORS.toggleableContent).style.display = 'block';
        document.querySelector(SELECTORS.button).textContent = BUTTONTEXT.less
    } else {
        document.querySelector(SELECTORS.toggleableContent).style.display = 'none';
        document.querySelector(SELECTORS.button).textContent = BUTTONTEXT.more

    }

}