import Addtask from './Addtask'

const Todo = ({todos, setTodos}) => {
  return (
    <div>
     <div className="todo-container">
      {todos.map(todo => (
              <Addtask 
              text={todo.text}
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              date={todo.date}
              />
              ))}
     </div>
    </div>
  )
}

export default Todo