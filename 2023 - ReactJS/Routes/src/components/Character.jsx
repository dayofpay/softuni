export default function Character({name,height,eye_color,hair_color,skin_color,homeworld}){
    return (
<div className="card" style={{width: '18rem'}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Name: {name}</h5>
    <p className="card-text">Height : {height}</p>
    <p className="card-text">Eye Color: {eye_color}</p>
    <p className="card-text">Hair Color: {hair_color}</p>
    <p className="card-text">Skin Color: {skin_color}</p>
    <a href={homeworld} className="btn btn-primary">Home world</a>
  </div>
</div>
    )
}