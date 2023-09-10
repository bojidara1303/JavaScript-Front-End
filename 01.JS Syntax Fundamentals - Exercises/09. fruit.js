function fruit(fruit, grams, pricePerKg) {

    let kilograms = (grams / 1000).toFixed(2);
    let totalPrice = (kilograms * pricePerKg).toFixed(2);
    console.log(`I need $${totalPrice} to buy ${kilograms} kilograms ${fruit}.`)

}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);