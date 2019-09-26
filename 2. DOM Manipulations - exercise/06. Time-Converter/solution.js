function attachEventsListeners() {
    const SELECTORS = {
        convertButton: 'div input[type=button]',
        time: 'div input[type=text]'
    };
    const TIME_METRICS = {
        seconds : 'seconds',
        minutes: 'minutes',
        hours: 'hours',
        days: 'days'
    }
    const convertFunction = function (ev) {
        let type = ev.target.parentNode.children[1].id;
        let value = Number(ev.target.parentNode.children[1].value);
        let seconds = 0
        switch (type) {
            case TIME_METRICS.days:
                seconds = value * 24 * 60 * 60;
                break;
            case TIME_METRICS.hours:
                seconds = value * 60 * 60;
                break;
            case TIME_METRICS.minutes:
                seconds = value * 60;
                break;
            case TIME_METRICS.seconds:
                seconds = value;
                break;
        }

        const minutes = seconds / 60;
        const hours = minutes / 60;
        const days = hours / 24;

        document.getElementById(TIME_METRICS.days).value = days;
        document.getElementById(TIME_METRICS.hours).value = hours;
        document.getElementById(TIME_METRICS.minutes).value = minutes;
        document.getElementById(TIME_METRICS.seconds).value = seconds;

    };

    [...document.querySelectorAll(SELECTORS.convertButton)]
        .forEach(btn => btn.addEventListener('click', convertFunction))
}