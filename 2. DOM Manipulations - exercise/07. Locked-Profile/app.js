function lockedProfile() {
    const SELECTORS = {
        button: 'button',
        lockStatus: 'input[type=radio]:checked',
        hiddenDiv: 'div'
    };

    const DISPLAY_STYLES = {
        block: 'block',
        none: 'none'
    };

    const showHideContent = function (ev) {
        const button = ev.target;
        const profile = button.parentNode;
        const moreInformation = profile.querySelector(SELECTORS.hiddenDiv);
        const isLocked = profile.querySelector(SELECTORS.lockStatus).value;

        if (isLocked === 'unlock') {
            if (button.textContent === 'Show more') {
                moreInformation.style.display = DISPLAY_STYLES.block;
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                moreInformation.style.display = DISPLAY_STYLES.none;
                button.textContent = 'Show more';
            }
            
        }
    }

    const buttons = [...document.querySelectorAll(SELECTORS.button)];
    buttons.forEach(btn => btn.addEventListener('click', showHideContent));


}