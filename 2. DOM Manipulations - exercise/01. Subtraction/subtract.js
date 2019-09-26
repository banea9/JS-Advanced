function subtract() {

    let firstElNumber = document.getElementById('firstNumber');
    let secondElNumber = document.getElementById('secondNumber');
    
    let result = Number(firstElNumber.value) - Number(secondElNumber.value);
    document.getElementById('result').textContent = result;

}