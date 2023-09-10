// function factorialSum(x, y) {

//     let sumX = 1;
//     let sumY = 1;

//     for (let i = 1; i <= x; i++) {
//         sumX *= i;
//     }

//     for (let k = 1; k <= y; k++) {
//         sumY *= k;
//     }

//     console.log((sumX / sumY).toFixed(2));
// }
// factorialSum(5, 2)


function factorialSum(x, y) {
    function calcFactorial(n) {
        let sum = 1;

        for (let i = 1; i <= n; i++) {
            sum *= i;
        }
        return sum;
    }
    let sumX = calcFactorial(x);
    let sumY = calcFactorial(y);

    console.log((sumX / sumY).toFixed(2));
}
factorialSum(5, 2)