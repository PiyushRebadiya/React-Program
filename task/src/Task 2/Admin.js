import React from 'react'
import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

function Admin() {

    const token = localStorage.getItem('token','helo');

    if (token === null) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <h1>This is Admin Page...</h1>
            <Link to='/logout'>Logout</Link>
        </div>
    )
}

export default Admin
