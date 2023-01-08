import {useState} from 'react' 
import { Helmet } from 'react-helmet-async'
import { FaTimes } from 'react-icons/fa'
import Addtask from './Addtask'

const Home = () => {
  const [task, setTask] = useState('')
  const [text, setText] = useState('')
  const [day, setDay] = useState('')


  const deleteEvent = (id) => {
  }

  const addTask = (task) => {
    console.log(task)
  }

  const onSubmit = (e) => {
    e.prevent.default()


    setText('')
    setDay('')
  }
  
  return (
    <div className='home'>
      <Helmet>
            <title>Home</title>
            <meta name='description' content="This is the home page."/>
            <link rel="canonical" href="/" />
          </Helmet>
      <div className="container">
        <div className="todolist">
          <form className='form-control' onSubmit={onSubmit}>
            <h1>Todo List</h1>
            <input className='input' onChange={(e) => setText(e.target.value)} type="text" placeholder="Enter your task" value={text} />
            <input className='input' type="text" placeholder="Enter Date & Time" value={day} onChange={(e) => setDay(e.target.value)}/>
            <button>Submit</button>
            <div className="saveList">
              <Addtask  onAdd={addTask}/>
            </div>
          </form>
        </div>
      </div>
    </div>

    
  )
}

export default Home
