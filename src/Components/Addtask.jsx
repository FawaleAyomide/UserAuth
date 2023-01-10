import {FaTrash} from 'react-icons/fa'

const Addtask = ({text, date, todo, todos, setTodos}) => {

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id))
  }
  return (
    <div className='List'>
    <li className='todo-list'>{text}</li>
    <li className='todo-list'>{date}</li>
      <FaTrash onClick={deleteHandler} className='fas fa-trash'/>
    </div>
  )
}

export default Addtask