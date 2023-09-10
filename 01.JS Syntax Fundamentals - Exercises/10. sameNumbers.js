function sameNumbers(n) {
    let toStr = n.toString();
    let isSame = true;
    let sum = Number(toStr[0]);
    
    for (let i = 1; i < toStr.length; i++) {
        sum += Number(toStr[i])
        if (toStr[i] !== toStr[i - 1]) {
            isSame = false;
        }
    }
    console.log(isSame)
    console.log(sum)
}
sameNumbers(2222222)
sameNumbers(1234)