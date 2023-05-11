import {FaSignInAlt, FaUser} from 'react-icons/fa'
import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
     <header className='header'>
    <div>
     <li>
  
            <Link to='/'>GoalSetter</Link>        </li>

</div>
        
        <li>
            <Link to='/about'>
                <FaUser/>About
            </Link>
            </li>
            
        <ul>
        <li>
            <Link to='/login'>
                <FaSignInAlt/>Login
            </Link>
            </li>
          

            <li>
            <Link to='/register'>
                <FaUser/>Register
            </Link>
            </li>
        
        </ul>
      </header></>
  )
}

export default Header
