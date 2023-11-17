import { useState, useEffect } from "react";

export default function Swapi(){
    let api_url = "https://swapi.dev/api"
    const [characters,setCharacters] = useState([]);

    useEffect(() => {


          fetch(`${api_url}/people`)
          .then(res => res.json())
          .then(data => {
             setCharacters(data.results);
         })
    },[])


    return(
        <ul>
            {characters.map(character => <li key={character.name}>{character.name}</li>)}

        </ul>
    )
}