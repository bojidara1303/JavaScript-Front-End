function printAndSum(firstNum, secNum) {

    let sum = 0;
    let newArr = [];

    for (let i = firstNum; i <= secNum; i++) {
        newArr.push(i);

        sum += i;
    }

    console.log(newArr.join(' '));
    console.log(`Sum: ${sum}`);

}

printAndSum(5, 10)