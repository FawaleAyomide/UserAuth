import {FaTrash} from 'react-icons/fa'

const Addtask = ({text, todo, todos, setTodos}) => {

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id))
  }
  return (
    <div className='List'>
    <h3>{text}</h3>
    <FaTrash onClick={deleteHandler} className="fas fa-check"></FaTrash>
    </div>
  )
}

export default Addtask