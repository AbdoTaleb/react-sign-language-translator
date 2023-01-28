import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUser } from '../../context/UserContext'

function Navbar() {

    const {user} = useUser();
  return (
    <>
      <nav>
        <ul>
            
        </ul>
        { user !== null &&
            <ul>
              
                <li>
                    <p>Translate Sign Language</p>
                </li>
                <li>
                    <NavLink to="/translate">Translations</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
            </ul>
        }
      </nav>
    </>
  )
}

export default Navbar
