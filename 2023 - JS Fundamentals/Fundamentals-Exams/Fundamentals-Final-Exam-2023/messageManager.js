function start(inputData) {
    let capacity = Number(inputData[0]);
    let pointer = 1;
    let userData = new Map();
    while (inputData[pointer] !== "Statistics") {
        // Commands
        let command = inputData[pointer].split("=");

        if (command[0] === "Add") {

            if (userData.has(command[1])) {

            } else {
                userData.set(command[1], new Map());

                userData.get(command[1]).set(Number(command[2]), Number(command[3]));
            }
        } else if (command[0] === "Message") {
            if (userData.has(command[1]) && userData.has(command[2])) {
                let [senderData] = userData.get(command[1]);
                let [receiverData] = userData.get(command[2]);

                // Update Sender Messages
                userData.get(command[1]).delete(senderData[0]);
                userData.get(command[1]).set(senderData[0] + 1, senderData[1]);

                // Update Receiver Messages
                userData.get(command[2]).delete(receiverData[0]);
                userData.get(command[2]).set(receiverData[0], receiverData[1] + 1);

                let [checkSenderLimit] = userData.get(command[1]);
                let [checkReceiverLimit] = userData.get(command[2]);
                if (Number(checkSenderLimit[1] + checkSenderLimit[0]) >= capacity) {
                    console.log(`${command[1]} reached the capacity!`);
                    userData.delete(command[1]);
                }
                if (Number(checkReceiverLimit[1] + checkReceiverLimit[0]) >= capacity) {
                    console.log(`${command[2]} reached the capacity!`);
                    userData.delete(command[2]);
                }


            }
        } else if (command[0] === "Empty") {
            if (command[1] === "All") {
                userData.clear();
            } else {
                if (userData.has(command[1])) {
                    userData.delete(command[1]);
                }
            }
        }

        //

        pointer++;
    }
    console.log("Users count: " + userData.size);
    //console.table(userData)
    for (let [name] of userData) {
        for (let [sendMessages, receivedMessages] of userData.get(name)) {
            console.log(`${name} - ${sendMessages + receivedMessages}`);
        }
    }
    //console.table(userData);


}
start(["12",
"Add=Bonnie=3=5",
"Add=Johny=4=4",
"Empty=All",
"Add=Bonnie=3=3",
"Statistics"])
