import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <div>
                <ul>
                    <li><Link to='/home' >Home</Link></li>
                    <li><Link to='/contact' >Contact</Link></li>
                    <li> <Link to='/about' >About</Link></li>
                    <li> <Link to='/help' >Help</Link></li>
                    <li> <Link className='dev' onClick={() => { localStorage.removeItem('token') }}>Log Out</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
