import React from 'react'
import { Link, Redirect } from 'react-router-dom'

function LogOut() {

//    localStorage.removeItem('token')

if (localStorage.key(0) === null) {
    return <Redirect to='/' />
}
//    if(localStorage.key(0) !== 'token'){
//        return <Redirect to='/admin' />
//    }

    return (
        <div>
            <h1>You have been Logged out!!!</h1>
            <Link to='/'>Login Again</Link>
        </div>
    )
}

export default LogOut
