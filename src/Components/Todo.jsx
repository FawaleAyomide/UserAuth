import Addtask from './Addtask'

const Todo = ({todos, setTodos}) => {
  return (
    <div>
     {todos.map(todo => (
        <Addtask  setTodos={setTodos} todo={todo} todos={todos} text={todo.text} id={todo.id}/>
     ))}
    </div>
  )
}

export default Todo