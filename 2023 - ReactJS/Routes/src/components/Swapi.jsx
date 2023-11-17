import { useState, useEffect } from "react";

export default function Swapi(){
    let api_url = "https://swapi.dev/api"
    const [characters,setCharacters] = useState([]);
    const [hasError,setError] = useState(false);
    useEffect(() => {


          fetch(`${api_url}/people`)
          .then(res => res.json())
          .then(data => {
             setCharacters(data.results);
         }).catch((err) => {
            setError(true);
            console.log('Error',err);
         })
    },[])

    while(!hasError && !characters.length){
        return <div style={{color:'red', fontSize:'55px'}}>Loading, please wait ;) ...</div>
    }

    if(hasError){ // Error handling in case something happens while trying to fetch
        return <div style={{color:'red'}}>Error while trying to fetch data from the API</div>
    }
    return(
        <ul>
            {characters.map(character => <li key={character.name}>{character.name}</li>)}

        </ul>
    )
}