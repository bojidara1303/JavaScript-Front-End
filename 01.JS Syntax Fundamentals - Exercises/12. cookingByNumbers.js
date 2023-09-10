function cookingByNums(n, ...commands) {
    let sum = Number(n);

    for (let i = 0; i < commands.length; i++) {
        let command = commands[i];

        switch (command) {
            case 'chop': sum = sum / 2; break;
            case 'dice': sum = Math.sqrt(sum); break;
            case 'spice': sum += 1; break;
            case 'bake': sum *= 3; break;
            case 'fillet': sum -= sum * 0.2; break;
        }
        console.log(sum)
    }
}
cookingByNums('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNums('9', 'dice', 'spice', 'chop', 'bake', 'fillet');