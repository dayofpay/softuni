function start(steps, footprintLength, speed) {
    const distanceInMeters = Math.abs(steps * footprintLength);
    const speedInMetersPerSecond = Math.abs(speed * 1000 / 3600);
    const restTimeInMinutes = Math.floor(distanceInMeters / 500);
    const totalSeconds = Math.round(distanceInMeters / speedInMetersPerSecond + restTimeInMinutes * 60);
    const hours = Math.floor(totalSeconds / 3600).toString();
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString();
    const seconds = Math.floor(totalSeconds % 60).toString();
    console.log(`${hours.padStart(2,'0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`);
}

start(4000, 0.60, 5); 
start(2564, 0.70, 5.5); 
