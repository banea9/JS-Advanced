function attachEventsListeners() {
    const SELECTORS = {
        convertButton: 'div input[type=button]',
        inputUnits: '#inputUnits',
        outputUnits: '#outputUnits',
        inputDistance: '#inputDistance',
        outputDistance: '#outputDistance',
    };
    const METRICS_TO_METERS = {
        km: 1000,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }
    const EVENTS = {
        click: 'click'
    };
    const METRICS_FROM_METERS = {
        km: 0.1,
        cm: 100,
        mm: 1000,
        mi: 0.000621371,
        yrd: 1.09361296,
        ft: 3.28084,
        in: 39.3701
    }
    const convertorFunc = function () {

        let inputDistance = Number(document.querySelector(SELECTORS.inputDistance).value);
        let outputDistance = document.querySelector(SELECTORS.outputDistance).value;
        let inputMetric = document.querySelector(SELECTORS.inputUnits).value;
        let outputMetric = document.querySelector(SELECTORS.outputUnits).value;

        switch (inputMetric) {
            case 'km':
                outputDistance = METRICS_TO_METERS.km * inputDistance;
                break;
            case 'm':
                outputDistance = inputDistance;
                break;
            case 'cm':
                outputDistance = METRICS_TO_METERS.cm * inputDistance;
                break;
            case 'mm':
                outputDistance = METRICS_TO_METERS.mm * inputDistance;
                break;
            case 'mi':
                outputDistance = METRICS_TO_METERS.mi * inputDistance;
                break;
            case 'yrd':
                outputDistance = METRICS_TO_METERS.yrd * inputDistance;
                break;
            case 'ft':
                outputDistance = METRICS_TO_METERS.ft * inputDistance;
                break;
            case 'in':
                outputDistance = METRICS_TO_METERS.in * inputDistance;
                break;
        }

        switch (outputMetric) {
            case 'km':
                outputDistance = METRICS_FROM_METERS.km * outputDistance;
                break;
            case 'm':
                outputDistance = outputDistance;
                break;
            case 'cm':
                outputDistance = METRICS_FROM_METERS.cm * outputDistance;
                break;
            case 'mm':
                outputDistance = METRICS_FROM_METERS.mm * outputDistance;
                break;
            case 'mi':
                outputDistance = METRICS_FROM_METERS.mi * outputDistance;
                break;
            case 'yrd':
                outputDistance = METRICS_FROM_METERS.yrd * outputDistance;
                break;
            case 'ft':
                outputDistance = METRICS_FROM_METERS.ft * outputDistance;
                break;
            case 'in':
                outputDistance = METRICS_FROM_METERS.in * outputDistance;
                break;
        }
        
        document.querySelector(SELECTORS.outputDistance).value = outputDistance;
    }

    document.querySelector(SELECTORS.convertButton).addEventListener(EVENTS.click, convertorFunc);
}