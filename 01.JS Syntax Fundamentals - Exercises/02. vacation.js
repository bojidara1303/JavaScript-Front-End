function vacation(peopleCount, groupType, day) {

    let totalPrice = 0;

    if (groupType === "Students") {

        switch (day) {
            case "Friday": totalPrice = 8.45 * peopleCount; break
            case "Saturday": totalPrice = 9.80 * peopleCount; break
            case "Sunday": totalPrice = 10.46 * peopleCount; break;
        }

        if (peopleCount >= 30) {
            totalPrice = totalPrice * 0.85;
        }
    } else if (groupType === "Business") {
        if (peopleCount < 100) {
            switch (day) {
                case "Friday": totalPrice = 10.90 * peopleCount; break
                case "Saturday": totalPrice = 15.60 * peopleCount; break
                case "Sunday": totalPrice = 16 * peopleCount; break;
            }
        } else if (peopleCount >= 100) {
            switch (day) {
                case "Friday": totalPrice = 10.90 * (peopleCount - 10); break
                case "Saturday": totalPrice = 15.60 * (peopleCount - 10); break
                case "Sunday": totalPrice = 16 * (peopleCount - 10); break;
            }
        }
    } else if (groupType === "Regular") {
        switch (day) {
            case "Friday": totalPrice = 15 * peopleCount; break
            case "Saturday": totalPrice = 20 * peopleCount; break
            case "Sunday": totalPrice = 22.50 * peopleCount; break;
        }
        if (peopleCount >= 10 && peopleCount <= 20) {
            totalPrice *= 0.95
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");