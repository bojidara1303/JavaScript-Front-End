function repeatString(str, n) {

    let res = '';
    for (let i = 1; i <= n; i++) {
        res += str;
    }
    console.log(res)
}
repeatString("abc", 3)
repeatString("String", 2)