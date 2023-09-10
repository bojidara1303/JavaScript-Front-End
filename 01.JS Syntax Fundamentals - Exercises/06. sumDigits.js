function sumDigits(num) {

    let sum = 0;
    let toStr = num.toString();

    for (let i = 0; i < toStr.length; i++) {
        sum += Number(toStr[i])
    }
    console.log(sum)

}
sumDigits(245678)
sumDigits(97561)
sumDigits(543)