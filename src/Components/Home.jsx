import React from 'react' 
import { Helmet } from 'react-helmet-async'
import { NavLink } from 'react-router-dom'
import illust from '../Img/Layer 2.png'

const Home = ({inputText}) => {
  
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
        <NavLink to='./Login.jsx'>
      {/* <h3 className='btn btn-primary '>Login</h3> */}
        </NavLink>
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
