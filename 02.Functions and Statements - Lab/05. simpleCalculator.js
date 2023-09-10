function simpleCalculator(firstNum, secondNum, operator) {

    let result = 0;
    
    switch (operator) {
        case 'multiply': result = firstNum * secondNum; break;
        case 'divide': result = firstNum / secondNum; break;
        case 'add': result = firstNum + secondNum; break;
        case 'subtract': result = firstNum - secondNum; break;
    }
    console.log(result)
}
simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');