import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Form from './Form'
import Todo from './Todo'

const Home = () => {
  const [textHandler, setTextHandler] = useState('')
  const [todos, setTodos] = useState('')
  return (
    <div className='home'>
      <Helmet>
            <title>Home</title>
            <meta name='description' content="This is the home page."/>
            <link rel="canonical" href="/" />
          </Helmet>
          <Form todos={todos} setTodos={setTodos} setTextHandler={setTextHandler} textHandler={textHandler}/>
          <Todo />
    </div>

    
  )
}

export default Home
