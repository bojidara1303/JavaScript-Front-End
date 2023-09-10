function vacation(peopleCount, groupType, day) {

    const prices = {
        Students: {
            Friday: 8.45,
            Saturday: 9.80,
            Sunday: 10.46
        },
        Business: {
            Friday: 10.90,
            Saturday: 15.60,
            Sunday: 16
        },
        Regular: {
            Friday: 15,
            Saturday: 20,
            Sunday: 22.50
        }
    };

    let totalPrice = 0;
    const cost = prices[groupType][day]
    totalPrice = peopleCount * cost;

    if (groupType === 'Students' && peopleCount >= 30) {
        totalPrice -= totalPrice * 0.15;
    } else if (groupType === 'Business' && peopleCount >= 100) {
        peopleCount -= 10;
    } else if (groupType === 'Regular' && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice -= totalPrice * 0.05;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");