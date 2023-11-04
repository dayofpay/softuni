import './App.css'

function App() {
    let numbers = [1,2,3,4,5];
    const doubled = numbers.map((number) => number *= 2).sort((a,b) => a+b);
    
    console.log(doubled);
    return (
      <ul>
        {doubled.map((element) => <li>{element}</li>)}
      </ul>
    )
}

export default App
