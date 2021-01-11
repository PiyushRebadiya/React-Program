import React from 'react'
import { Link } from 'react-router-dom'

function LogOut() {

    localStorage.removeItem('token')
    return (
        <div>
            <h1>You have been Logged out!!!</h1>
            <Link to='/'>Login Again</Link>
        </div>
    )
}

export default LogOut
