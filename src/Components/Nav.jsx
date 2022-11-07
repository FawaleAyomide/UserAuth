import React from 'react'
import Logo from '../Img/alt.png'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
       <img src={Logo} alt="logo" className='logo' />
       <ul className="nav-links">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        </ul> 
    </nav>
  )
}

export default Nav