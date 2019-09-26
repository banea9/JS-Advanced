function addItem() {
    const SELECTORS = {
        text: '#newItemText',
        value: '#newItemValue',
        select: '#menu'
    }

    let newOption = document.createElement('option');
    newOption.textContent = document.querySelector(SELECTORS.text).value;
    newOption.value = document.querySelector(SELECTORS.value).value;
    document.querySelector(SELECTORS.select).appendChild(newOption);
    document.querySelector(SELECTORS.text).value = '';
    document.querySelector(SELECTORS.value).value = '';
}