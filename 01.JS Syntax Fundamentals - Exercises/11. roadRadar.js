function roadRadar(speed, area) {
    let speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };
    let currSpeedLimit = speedLimits[area];
    let speedOverLimit = speed - currSpeedLimit;

    if (speedOverLimit <= 0) {
        console.log(`Driving ${speed} km/h in a ${currSpeedLimit} zone`);
        return;
    }

    let speedingMsg = speedOverLimit <= 20
        ? 'speeding'
        : speedOverLimit <= 40
            ? 'excessive speeding'
            : 'reckless driving';

    console.log(`The speed is ${speedOverLimit} km/h faster than the allowed speed of ${currSpeedLimit} - ${speedingMsg}`)
}
roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')