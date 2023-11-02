import { useState } from "react"

export default function Timer(props){


    const [time,setTime] = useState(props.startTime); // We will pass initial state ( Default Value )




    if(time < props.endTime){
        setTimeout(() => {
            setTime(time+1);
    
        }, 1000);
    }
    else{
        console.log(`Timer limit reached !`);
    }
    return (
     <div>
        <h3>Timer</h3>
        <p>{time}</p>
     </div>
    )
}