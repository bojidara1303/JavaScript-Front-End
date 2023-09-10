function censoredWords(sentance, word) {

    let censored = '*'.repeat(word.length);

    while (sentance.includes(word)) {
        sentance = sentance.replace(word, censored);
    }
    console.log(sentance)

}
censoredWords('A small sentence with some words', 'small');