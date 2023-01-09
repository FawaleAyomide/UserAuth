import React from 'react'
import Addtask from './Addtask';

const Form = ({ setTextHandler, todos, setTodos, textHandler}) => {

    const inputText = (e) => {
        setTextHandler(e.target.value);
    }
    const onSubmit = (e) => {
        e.prevent.default()
        setTodos([
            ...todos, {text: textHandler, completed: false, id: Math.random() * 1000 }
        ])
        setTextHandler("")
    }
  return (
        <div className="container">

         <div className="todolist">
          <form className='form-control' style={{margin: 'auto'}}>
            <h1>Todo List</h1>
            <input value={textHandler} onChange={inputText} className='input' required type="text" placeholder="Enter your task" />
            <button onClick={onSubmit}>Add</button>
            <Addtask setTodos={setTodos} todos={todos}/>
          </form>
        </div>
        </div>
  )
}

export default Form