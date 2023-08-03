function scheduleMeeting(inputData){
    let meetings = {};


    inputData.forEach(meeting => {
        let meetData = meeting.split(' ');
        if(meetings.hasOwnProperty(meetData[0])){
            console.log(`Conflict on ${meetData[0]}!`);
        }
        else{
            meetings[meetData[0]] = meetData[1];
            console.log(`Scheduled for ${meetData[0]}`);
        }
    });

    for(let meeting in meetings){
        console.log(`${meeting} -> ${meetings[meeting]}`);
    }
}
scheduleMeeting(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);