function sameNumbers(n) {
    const digits = Array.from(String(n), Number);
    const isConsistent = new Set(digits).size === 1 ? true : false;
    const sum = digits.reduce(function (total, n) {
        return total + n;
    }, 0)

    console.log(isConsistent);
    console.log(sum);
}
sameNumbers(2222222)
sameNumbers(1234)



// function sameNumbers(n) {
//     const digits = n.toString().split("").map(Number);
//     const isConsistent = new Set(digits).size === 1 ? true : false;
//     const sum = digits.reduce((function (total, n) => total + n,0);
//
//     console.log(isConsistent);
//     console.log(sum);
// }
// sameNumbers(2222222)
// sameNumbers(1234)