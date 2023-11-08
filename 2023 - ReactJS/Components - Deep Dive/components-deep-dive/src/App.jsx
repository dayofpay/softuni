import { useEffect,useState } from 'react';
import './App.css'
import StarWars from './Starwars';
function App() {

    const [number,setNumber] = useState(0);


    const updateNumber = () => {
      setNumber(number+1);
    }
    const decrementNumber = () => {
      setNumber(number-1 > 1 ? number-1:0);
    }
    useEffect(() => {
      document.getElementById('clickCount').textContent = `You have clicked the button ${number} times !`;
    },[number]);
    let numbers = [1,2,3,4,5];
    const doubled = numbers.map(
      (number,index) => <li key={index}>{number *= 2}</li>).sort(
        (a,b) => a+b);
    
    return (
      <div>
        <p id='clickCount'></p>
        <StarWars/>
      <ul>
        {doubled}
      </ul>
      <button onClick={updateNumber}>+</button>
      <button onClick={decrementNumber}>-</button>
      </div>
    )
}

export default App
