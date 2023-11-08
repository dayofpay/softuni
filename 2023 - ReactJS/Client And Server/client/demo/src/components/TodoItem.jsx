export default function TodoItem(props){
    const isCompleted = props.isCompleted ? 'todo is-completed' : 'todo';

    const onChangeStatus = () => {
        props.changeStatusHandler(props.id)
    }
    return(
        <tr className={isCompleted} data-key={props._id}>
        <td>{props.text}</td>
        <td>{props.isCompleted ? 'Completed' : 'Not completed'}</td>
        <td className="todo-action">
          <button className="btn todo-btn" onClick={onChangeStatus}>Change status</button>
        </td>
      </tr>
    )
}