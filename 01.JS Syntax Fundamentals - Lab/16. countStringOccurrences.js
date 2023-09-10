function countStringOccurences(sentence, word) {

    let counter = sentence.split(" ").filter(function (el) {
        return el === word;
    }).length;
    
    console.log(counter)
}
countStringOccurences('This is a word and it also is a sentence', 'is')