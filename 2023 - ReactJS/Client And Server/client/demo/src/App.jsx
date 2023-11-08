import Header from "./components/Header"
import Add from "./components/Add"
import TodoItem from "./components/TodoItem"
import { useEffect,useState } from "react";
import Footer from "./components/Footer";
import TableHeader from "./components/TableHeader";
function App() {

  const [todos,addTodo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/todos').then(response => response.json())
    .then(data => {
      const result = Object.values(data);
      console.log(result);
      addTodo(result);
    }).catch(err => {
      console.error(err);
    })
  },[])
  return (
<div>

  {/* <!-- Navigation header --> */}
  <Header/>
  {/* <!-- Main content --> */}
  <main className="main">

    {/* <!-- Section container --> */}
    <section className="todo-list-container">
      <h1>Todo List</h1>


      {/* Add new */}
      <Add/>
      <div className="table-wrapper">

        {/* <!-- Todo list table --> */}
        <table className="table">
          <TableHeader/>
          <tbody>

            {/* <!-- Todo item --> */}
            {todos.map(todoItem => <TodoItem text={todoItem.text} isCompleted={todoItem.isCompleted} id={todoItem._id} key={todoItem._id}/>)}
          </tbody>
        </table>
      </div>
    </section>
  </main>

  {/* <!-- Footer --> */}
  <Footer/>
</div>
  )
  
}

export default App
