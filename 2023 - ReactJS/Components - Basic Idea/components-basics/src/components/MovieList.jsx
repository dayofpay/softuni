export default function MovieList(props){
    console.log(props);
return (
<div className="movie-list">
    <h2>{props.headingText}</h2>
    <ul>
        <li>{props.movieList[0].title}</li>
        <li>Second Movie</li>
        <li>Third Movie</li>
    </ul>
</div>
)
}