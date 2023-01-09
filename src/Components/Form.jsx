import React from 'react'
import Addtask from './Addtask';

const Form = ({ setTextHandler, todos, setTodos, textHandler}) => {

    const inputText = (e) => {
        setTextHandler(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault()
        setTodos([
            ...todos, {text: textHandler, completed: false, id: Math.random() * 1000 }
        ])
        setTextHandler("")
    }
  return (
        <div className="container">

         <div className="todolist">
          <form className='form-control' onSubmit={onSubmit} style={{margin: 'auto'}}>
            <h1>Todo List</h1>
            <input value={textHandler} onChange={inputText} className='input' required type="text" placeholder="Enter your task" />
            <button>Add</button>
            {todos.map(todo => (
        <Addtask  setTodos={setTodos} todo={todo} todos={todos} text={todo.text} id={todo.id}/>
     ))}
          </form>
        </div>
        </div>
  )
}

export default Form