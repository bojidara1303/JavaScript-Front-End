function meetings(meetingsArr) {

    const schedule = meetingsArr.reduce((acc, curr) => {
        const [day, name] = curr.split(" ");

        if (acc.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            acc[day] = name;
            console.log(`Scheduled for ${day}.`);
        }
        return acc;
    }, {});

    for (let el of Object.keys(schedule)) {
        console.log(`${el} -> ${schedule[el]}`)
    }

}
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']);