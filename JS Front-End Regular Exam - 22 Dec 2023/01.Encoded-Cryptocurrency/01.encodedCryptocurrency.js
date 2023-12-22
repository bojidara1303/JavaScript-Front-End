function encodedCrypto(input) {

    let crypto = input.shift()

    let line = input.shift();
    while (line !== "Buy") {
        let [command, ...tokens] = line.split("?");

        switch (command) {
            case "TakeEven":
                crypto = Array.from(crypto).filter((symbol, i) => i % 2 === 0).join("");
                console.log(crypto)

                break;

            case "ChangeAll":
                while (crypto.includes(tokens[0])) {
                    crypto = crypto.replace(tokens[0], tokens[1]);
                }
                console.log(`${crypto}`);
                break;

            case "Reverse":
                let substr = tokens[0];
                if (!crypto.includes(substr)) {
                    console.log("error");
                    break;
                }
                else if (crypto.includes(substr)) {
                    crypto = crypto.replace(substr, "");
                    let reversed = Array.from(substr).reverse().join('')
                    crypto += reversed;
                    console.log(`${crypto}`)
                }

                break;
        }
        line = input.shift();
    }
    console.log(`The cryptocurrency is: ${crypto}`)


}

encodedCrypto(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"])


console.log("_______________________");

encodedCrypto(["PZDfA2PkAsakhnefZ7aZ",
    "TakeEven",
    "TakeEven",
    "TakeEven",
    "ChangeAll?Z?X",
    "ChangeAll?A?R",
    "Reverse?PRX",
    "Buy"])
