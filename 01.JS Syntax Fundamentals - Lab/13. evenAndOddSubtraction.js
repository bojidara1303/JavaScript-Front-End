function evenOddSubtr(arr) {

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) % 2 === 0) {
            evenSum += Number(arr[i])
        } else {
            oddSum += Number(arr[i])
        }
    }

    let result = evenSum - oddSum;
    console.log(result)

}
evenOddSubtr([1, 2, 3, 4, 5, 6]);
evenOddSubtr([3, 5, 7, 9]);
evenOddSubtr([2, 4, 6, 8, 10]);