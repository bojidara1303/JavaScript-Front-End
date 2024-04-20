function spellbookUnraveling(input) {

    let spell = input.shift();
    let line = input.shift();
    while (line !== "End") {
        let [command, ...tokens] = line.split("!");
        switch (command) {
            case "RemoveEven":
                spell = Array.from(spell).filter((symbol, i) => i % 2 === 0).join("");
                console.log(spell)
                break;
            case "TakePart":
                let startIndex = Number(tokens[0]);
                let endIndex = Number(tokens[1]);

                spell = spell.substring(startIndex, endIndex)
                console.log(spell);


                break;
            case "Reverse":
                let substr = tokens[0];
                if (!spell.includes(substr)) {
                    console.log("Error");
                    break;
                }
                else if (spell.includes(substr)) {
                    spell = spell.replace(substr, "");
                    let reversed = Array.from(substr).reverse().join('')
                    spell += reversed;
                    console.log(`${spell}`)
                }

                break
        }

        line = input.shift();
    }
    console.log(`The concealed spell is: ${spell}`)

}

spellbookUnraveling(["asAsl2adkda2mdaczsa",
    "RemoveEven",
    "TakePart!1!9",
    "Reverse!maz",
    "End"])
console.log("___________________");
spellbookUnraveling(["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m",
    "TakePart!31!42",
    "RemoveEven",
    "Reverse!anim",
    "Reverse!sad",
    "End"])
