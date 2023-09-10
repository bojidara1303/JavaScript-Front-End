function cats(arr) {

    let catObj = {};

    for (let singleCat of arr) {
        let [name, age] = singleCat.split(" ");
        catObj[name] = age;
    }

    for (let cat of Object.keys(catObj)) {
        console.log(`${cat}, age ${catObj[cat]} says Meow`)
    }

}
cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);