function loadingBar(percentage) {
    const percentageNum = percentage / 10;
    const bar = "%".repeat(percentageNum) + ".".repeat(10 - percentageNum);

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