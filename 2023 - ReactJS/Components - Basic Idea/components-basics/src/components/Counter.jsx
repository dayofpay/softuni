import { useState } from "react";


export default function Counter(props){
    const [count,setCount] = useState(0);

    const incrementCounter = () => {
        setCount(count+1);
    }

    const decrementCounter = () => {
        setCount(count-1);
    }

    const resetCounter = () => {
        setCount(0);
    }

    return (
        <div>
            <h1>Counter</h1>

            <p>Count : {count}</p>

            <button onClick={incrementCounter}>+</button>
            <button onClick={resetCounter}>Reset</button>
            <button onClick={decrementCounter}>-</button>
        </div>
    )
}