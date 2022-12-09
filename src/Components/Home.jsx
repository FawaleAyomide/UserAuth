import React from 'react' 
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import illust from '../Img/Layer 2.png'
import Login from './Login'

const Home = () => {
   const [inputText, setInputText] = useState('');
  
  return (
    <div className='home'>
      <Helmet>
            <title>Home</title>
            <meta name='description' content="This is the home page."/>
            <link rel="canonical" href="/" />
          </Helmet>
      <div className="container">
        <div className="row">
      <aside className='col-7'>
      <h1>Welcome to our Landing Page</h1>
      <h3>Happy Coding!!</h3>
      <div className="bttn .d-sm-flex">
      <h3 className='btn btn-primary '>{inputText}</h3>
      <Login setInputText={setInputText}/>
      </div>
      </aside>
      <div className='article col-sm' >
       <img src={illust} alt=""  width='350px' height='350px' className="img-fluid"/>
      </div>
        </div>
      </div>
      <br />
      <br />
    </div>

    
  )
}

export default Home
