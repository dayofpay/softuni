export default function TodoItem(props){
    const isCompleted = props.isCompleted ? 'todo is-completed' : 'todo';
    console.log(props,'PROPS-');
    return(
        <tr className={isCompleted} data-key={props._id}>
        <td>{props.text}</td>
        <td>{props.isCompleted ? 'Completed' : 'Not completed'}</td>
        <td className="todo-action">
          <button className="btn todo-btn">Change status</button>
        </td>
      </tr>
    )
}