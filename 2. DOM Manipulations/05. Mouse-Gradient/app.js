function attachGradientEvents() {
    const SELECTORS = {
        result: '#result',
        gradient: '#gradient-box',
        gradientBox: '#gradient-box #gradient'
    }
    const MOUSEEVENTS = {
        mousedown: 'mousedown',
        mousemove: 'mousemove',
        mouseup: 'mouseup'
    }

    const box = document.querySelector(SELECTORS.gradientBox);
    
    const gradientPercentageStart = function (e) {
        box.addEventListener(MOUSEEVENTS.mousemove, gradientPercentageMove);
        box.addEventListener(MOUSEEVENTS.mouseup, gradientPercentageEnd);
    }

    const gradientPercentageMove = function (e) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.querySelector(SELECTORS.result)
            .textContent = power + "%"

    }
    const gradientPercentageEnd = function (e) {
        box.removeEventListener(MOUSEEVENTS.mousemove, gradientPercentageMove)
    }

    box.addEventListener(MOUSEEVENTS.mousedown, gradientPercentageStart);
}