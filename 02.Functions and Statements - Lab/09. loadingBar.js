function loadingBar(percentage) {

    let bar = "";

    for (let i = 1; i < 100; i += 10) {
        if (i < percentage) {
            bar += "%";
        } else {
            bar += "."
        }
    }

    if (percentage === 100) {
        console.log("100% Compete!");
        console.log(`[${bar}]`);
    } else {
        console.log(`${percentage}% [${bar}]`);
        console.log("Still loading...")
    }

}
loadingBar(30);
loadingBar(50);
loadingBar(100);