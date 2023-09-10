function meetings(meetingsArr) {

    let meetingsObj = {};

    for (let singleMeeting of meetingsArr) {
        let [day, name] = singleMeeting.split(" ");
        if (!meetingsObj[day]) {
            meetingsObj[day] = name;
            console.log(`Scheduled for ${day}`)
        } else {
            console.log(`Conflict on ${day}!`)
        }

    }

    for (let el of Object.keys(meetingsObj)) {
        console.log(`${el} -> ${meetingsObj[el]}`)
    }

}
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']);