import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const { name } = useParams();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((result) => result.json())
      .then((data) => {
        const chars = data.results;


        setCharacters(chars.map((character) => character.name));
      });
  }, []);

  if(!characters.length){
    return(
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Loading, please wait!</h1>
                <p className="col-md-8 fs-4">Proccessing your request ....</p>
            <button className="btn btn-primary btn-lg" type="button">Example button</button>
      </div>
    </div>
    )
  }
  if(characters.includes(name)){
    return (
        <div className="bg-body-tertiary p-5 rounded">
          <h1>Starwars Character - {name}</h1>
          <p className="lead">
            This example is a quick exercise to illustrate how the top-aligned
            navbar works. As you scroll, this navbar remains in its original
            position and moves with the rest of the page.
          </p>
          <a
            className="btn btn-lg btn-primary"
            href="/docs/5.3/components/navbar/"
            role="button"
          >
            View navbar docs »
          </a>
        </div>
      );
  }else{
    return (
<div className="bg-dark text-secondary px-4 py-5 text-center">
    <div className="py-5">
      <h1 className="display-5 fw-bold text-white">Error</h1>
      <div className="col-lg-6 mx-auto">
        <p className="fs-5 mb-4">This SkyWars character does not exist !</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href="/" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Home</a>
            <a href="/swapi" className="btn btn-outline-light btn-lg px-4">Try again</a>

        </div>
      </div>
    </div>
  </div>
    )
  }

 
}
