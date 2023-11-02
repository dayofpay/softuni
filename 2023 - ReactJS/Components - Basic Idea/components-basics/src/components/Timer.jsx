import { useState } from "react"

export default function Timer(props){


    const [time,setTime] = useState(0); // We will pass initial state ( Default Value )


    console.log(`Current time is = ${time}`);


    setTimeout(() => {
        setTime(time+1);
        console.log(`Current time is = ${time}`);
    }, 1000);
    return (
     <div>
        <h3>Timer</h3>
        <p>{time}</p>
     </div>
    )
}