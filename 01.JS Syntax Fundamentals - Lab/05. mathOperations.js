function mathOperation(firstNum, secNum, operator) {

    switch (operator) {
        case '+': console.log(firstNum + secNum); break;
        case '-': console.log(firstNum - secNum); break;
        case '*': console.log(firstNum * secNum); break;
        case '/': console.log(firstNum / secNum); break;
        case '%': console.log(firstNum % secNum); break;
        case '**': console.log(firstNum ** secNum); break;
    }
}

mathOperation(5, 6, '+')
mathOperation(3, 5.5, '*')