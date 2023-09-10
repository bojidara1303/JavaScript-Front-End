function sumDigits(num) {
    let digitsStr = num.toString();
    let sum = 0;

    for (let i = 0; i < digitsStr.length; i++) {
        sum += Number(digitsStr[i])
    }
    console.log(sum)
}

sumDigits(245678)
sumDigits(97561)
sumDigits(543)