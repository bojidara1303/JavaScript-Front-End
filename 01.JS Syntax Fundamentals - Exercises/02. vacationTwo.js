function vacation(peopleCount, groupType, day) {

    let totalPrice = 0;

    if (groupType === 'Students') {
        if (day === 'Friday') {
            totalPrice = peopleCount * 8.45;
        } else if (day === 'Saturday') {
            totalPrice = peopleCount * 9.8;
        } else if (day === 'Sunday') {
            totalPrice = peopleCount * 10.46;
        }
        if (peopleCount >= 30) {
            totalPrice -= totalPrice * 0.15;
        }

    } else if (groupType === 'Business') {
        if (peopleCount >= 100) {
            peopleCount -= 10;
        }
        if (day === 'Friday') {
            totalPrice = peopleCount * 10.9;
        } else if (day === 'Saturday') {
            totalPrice = peopleCount * 15.6;
        } else if (day === 'Sunday') {
            totalPrice = peopleCount * 16;
        }

    } else if (groupType === 'Regular') {
        if (day === 'Friday') {
            totalPrice = peopleCount * 15;
        } else if (day === 'Saturday') {
            totalPrice = peopleCount * 20;
        } else if (day === 'Sunday') {
            totalPrice = peopleCount * 22.50;
        }

        if (peopleCount >= 10 && peopleCount <= 20) {
            totalPrice -= totalPrice * 0.05;
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
