import React from 'react' 
import { NavLink } from 'react-router-dom'
import illust from '../Img/Layer 2.png'

const Home = ({setLoggedIn}) => {
  
  return (
    <div className='home'>
      <div className="container">
        <div className="row">
      <aside className='col-7'>
      <h1>Landing Page Design</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente pariatur, fugit mollitia deserunt maiores soluta neque quibusdam laborum commodi praesentium.</h3>
      <div className="bttn .d-sm-flex">
        <NavLink to='/login' className='btn btn-primary'>
      <h3 className='btt '>Login</h3>
        </NavLink>
      <button className='btn btn-secondary ' onClick={() => setLoggedIn(null)}>Logout</button>
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