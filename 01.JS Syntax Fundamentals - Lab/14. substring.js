function substr(str, firstIndx, endIndx) {

    let strToArr = Array.from(str);
    let newWord = strToArr.splice(firstIndx, endIndx).join('');
    console.log(newWord)

}
substr('ASentence', 1, 8)
substr('SkipWord', 4, 7)