import { useState } from "react";


export default function Counter(props){
    const [count,setCount] = useState(0);

    const incrementCounter = () => {
        setCount(count+1);
    }

    return (
        <div>
            <h1>Counter</h1>

            <p>Count : {count}</p>

            <button onClick={incrementCounter}>+</button>
        </div>
    )
}