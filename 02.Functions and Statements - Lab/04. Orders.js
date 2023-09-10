function orders(product, count) {

    let singleCoffeePrice = 1.50;
    let singelWaterPrice = 1.00;
    let singleCokePrice = 1.40;
    let singleSnackPrice = 2.00;
    let totalPrice = 0;

    switch (product) {
        case 'coffee': totalPrice = singleCoffeePrice * count; break;
        case 'water': totalPrice = singelWaterPrice * count; break;
        case 'coke': totalPrice = singleCokePrice * count; break;
        case 'snacks': totalPrice = singleSnackPrice * count; break;
    }

    console.log(totalPrice.toFixed(2))

}
orders("water", 5)
orders("coffee", 2)