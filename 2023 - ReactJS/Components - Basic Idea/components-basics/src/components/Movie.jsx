export default function Movie(props){
    return (
        <article>
            <p>Title : {props.data.title}</p>
            <p>Description: {props.data.description}</p>
            <p>Rate: {props.data.rate}/10</p>
        </article>
    )
}