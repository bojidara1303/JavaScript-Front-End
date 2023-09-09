function solve(input) {

    let num = Number(input.shift());
    let astronauts = {};

    function astronautInfo(astronaut) {
        console.log(`Astronaut: ${astronaut}, Oxygen: ${astronauts[astronaut].oxygenLevel}, Energy: ${astronauts[astronaut].energyReserves}`);
    }

    for (let i = 0; i < num; i++) {
        let [astronaut, oxygenLevel, energyReserves] = input[i].split(' ');
        astronauts[astronaut] = {
            oxygenLevel: parseInt(oxygenLevel),
            energyReserves: parseInt(energyReserves)
        };
    }

    let index = num;

    while (input[index] !== "End") {
        let [command, astronaut, token] = input[index].split(' - ');

        if (command === 'Explore') {
            let energyNeeded = Number(token)
            if (astronauts[astronaut].energyReserves >= energyNeeded) {
                astronauts[astronaut].energyReserves -= energyNeeded;
                console.log(`${astronaut} has successfully explored a new area and now has ${astronauts[astronaut].energyReserves} energy!`)
            } else {
                console.log(`${astronaut} does not have enough energy to explore!`)
            }

        } else if (command === 'Refuel') {
            let amountRefuel = Number(token);
            const currentEnergy = astronauts[astronaut].energyReserves;
            let finalEnergy = currentEnergy + amountRefuel;
            if (finalEnergy > 200) {
                finalEnergy = 200;
                let energyAdded = finalEnergy - currentEnergy;
                astronauts[astronaut].energyReserves += energyAdded;
                console.log(`${astronaut} refueled their energy by ${energyAdded}!`)
            } else if (finalEnergy <= 200) {
                astronauts[astronaut].energyReserves += amountRefuel
                console.log(`${astronaut} refueled their energy by ${amountRefuel}!`)
            }

        } else if (command === 'Breathe') {
            let amountOxygen = Number(token);
            const currentOxygen = astronauts[astronaut].oxygenLevel;
            let finalOxygen = currentOxygen + amountOxygen;
            if (finalOxygen > 100) {
                finalOxygen = 100;
                let oxygenAdded = finalOxygen - currentOxygen;
                astronauts[astronaut].oxygenLevel += oxygenAdded;
                console.log(`${astronaut} took a breath and recovered ${oxygenAdded} oxygen!`)
            } else if (finalOxygen <= 100) {
                astronauts[astronaut].oxygenLevel += amountOxygen
                console.log(`${astronaut} took a breath and recovered ${amountOxygen} oxygen!`)
            }

        }

        index++;
    }

    for (let astronaut in astronauts) {
        astronautInfo(astronaut)
    }
}
solve(
    ['3',
        'John 50 120',
        'Kate 80 180',
        'Rob 70 150',
        'Explore - John - 50',
        'Refuel - Kate - 30',
        'Breathe - Rob - 20',
        'End']
)
console.log("____________________________")

solve(['4',
    'Alice 60 100',
    'Bob 40 80',
    'Charlie 70 150',
    'Dave 80 180',
    'Explore - Bob - 60',
    'Refuel - Alice - 30',
    'Breathe - Charlie - 50',
    'Refuel - Dave - 40',
    'Explore - Bob - 40',
    'Breathe - Charlie - 30',
    'Explore - Alice - 40',
    'End']
)