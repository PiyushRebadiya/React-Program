import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div className='MenuStyle'>
            <ul>
                <li><Link to='/'> Home </Link> </li>
                <li><Link to='About'> About </Link> </li>
                <li><Link to='/contact'> Contact </Link> </li>
            </ul>
        </div>
    )
}


export default Menu
