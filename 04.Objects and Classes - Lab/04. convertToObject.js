function convertToObj(json) {

    let person = JSON.parse(json);

    for (let key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`)
    }

}
convertToObj('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObj('{"name": "Peter", "age": 35, "town": "Plovdiv"}');