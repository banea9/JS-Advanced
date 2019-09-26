function solve(name, age, weight, height) {

    let bmi = Math.round(weight / (height / 100) ** 2);

    let generateStatus = (bmi) => {
        if (bmi < 18.5) {
            return 'underweight'
        }
        else if (bmi < 25) {
            return 'normal'
        }
        else if (bmi < 30) {
            return 'overweight'
        }
        else if (bmi >= 30) {
            return 'obese';
        }
    }

    let obj = {
        name,
        personalInfo: {
            age,
            weight,
            height
        },
        BMI: bmi,
        status: generateStatus(bmi)
    };
    
    if (obj.status === 'obese') {
        obj.recommendation = 'admission required'
    }

    return obj;
}
solve('Petar', 29, 75, 182)