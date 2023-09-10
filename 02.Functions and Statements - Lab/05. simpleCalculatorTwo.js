// function simpleCalculator(firstNum, secondNum, operator) {

//     if (operator === 'multiply') {
//         return firstNum * secondNum;
//     }

//     if (operator === 'divide') {
//         return firstNum / secondNum;
//     }

//     if (operator === 'add') {
//         return firstNum + secondNum;
//     }

//     if (operator === 'subtract') {
//         return firstNum - secondNum;
//     }
// }
// const result = simpleCalculator(5, 5, 'multiply');
// // simpleCalculator(40, 8, 'divide');
// // simpleCalculator(12, 19, 'add');
// // simpleCalculator(50, 13, 'subtract');

// console.log(result)








const calculator = {
    multiply: (firstNum, secondNum) => firstNum * secondNum,
    divide: (firstNum, secondNum) => firstNum / secondNum,
    add: (firstNum, secondNum) => firstNum + secondNum,
    subtract: (firstNum, secondNum) => firstNum - secondNum,
};

const calculate = (firstNum, secondNum, operator) => calculator[operator](firstNum, secondNum);

const result = simpleCalculator(5, 5, 'multiply');
// simpleCalculator(40, 8, 'divide');
// simpleCalculator(12, 19, 'add');
// simpleCalculator(50, 13, 'subtract');

console.log(result)