function Building(input) {
    let maxFloors = Number(input.shift());
    let maxRooms = Number(input.shift());
 
    for (let floor = maxFloors; floor > 0; floor--) {
        let floorString = "";
        for (let room = 0; room < maxRooms; room++) {
            if (floor == maxFloors) {
                floorString += "L" + floor + room + " ";
            } else if (floor % 2 == 0) {
                floorString += "O" + floor + room + " ";
            } else {
                floorString += "A" + floor + room + " ";
            }
        }
        console.log(floorString);
    }
}
 
Building([6, 4]);