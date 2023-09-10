class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    meow = () => {
        console.log(`${this.name}, age ${this.age} says meow!`);
    };
}

function cats(arr) {

    arr.forEach(line => {
        const [name, age] = line.split(" ");
        const cat = new Cat(name, age);
        const greet = cat.meow;

        greet();
    });

}
cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);