function phoneBook(arr) {

    let contacts = {};

    for (let singleContact of arr) {
        let [name, phone] = singleContact.split(" ");
        contacts[name] = phone;
    }

    for (let contact of Object.keys(contacts)) {
        console.log(`${contact} -> ${contacts[contact]}`)
    }

}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);
// phoneBook(['George 0552554',
//     'Peter 087587',
//     'George 0453112',
//     'Bill 0845344']);