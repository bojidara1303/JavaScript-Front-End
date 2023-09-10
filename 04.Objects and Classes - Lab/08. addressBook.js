function addressBook(arr) {

    let addresses = {};

    for (let singleAddress of arr) {
        let [name, address] = singleAddress.split(":");
        addresses[name] = address;
    }

    let sorted = Object.fromEntries(Object.entries(addresses).sort());

    for (let el of Object.keys(sorted)) {
        console.log(`${el} -> ${sorted[el]}`);
    }

}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);

addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);