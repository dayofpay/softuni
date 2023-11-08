import { useEffect,useState } from "react";

export default function StarWars(props){
    const [characters,setCharacters] = useState([]);
    console.log(characters);
    useEffect(() => {
        fetch(`https://swapi.dev/api/people`).then((response) => response.json())
        .then((data) => {
            setCharacters(data.results);
        })
        .catch((err) => {
            console.log('Error',err);
        })
    },[]);


    return (

    <div>
        <h1>Star Wars Characters</h1>
        <ul>
            {characters.map((character,index) => <li key={index}>{character.name}</li>)}
        </ul>
    </div>
    )
}