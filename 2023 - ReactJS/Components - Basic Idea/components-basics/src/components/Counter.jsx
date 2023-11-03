import { useState } from "react";


export default function Counter(props){
    const [count,setCount] = useState(0);

    const incrementCounter = () => {
        setCount(count+1);
    }

    const decrementCounter = () => {
        if(count-1 < 0){ // If we want to not allow users decrement value bellow 0
            return;
        }
        setCount(count-1);
    }

    const resetCounter = () => {
        setCount(0);
    }

    let counter = count < 0 ? <p>Invalid Counter</p> : null;
    
    return (
        <div>
            <h1>Counter</h1>

            <p>Count : {count}</p>
            {counter}
            <button onClick={incrementCounter}>+</button>
            <button onClick={resetCounter}>Reset</button>
            <button onClick={decrementCounter}>-</button>
        </div>
    )
    
}