import React from 'react'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'

function Login() {
    const [Name, setName] = useState('')
    const [Password, setPassword] = useState('')
    const [Loggedin, setLoggedin] = useState(false)

    // const token = localStorage.getItem('token')


    // if(Loggedin === null){
    //     setLoggedin(false)
    // }

    const NameHandler = (e) => {
        setName(e.target.value)

    }
    const PasswordHandler = (e) => {
        setPassword(e.target.value)

    }

    const submitForm = (e) => {
        e.preventDefault();
        if (Name === 'A' && Password === 'B') {
            localStorage.setItem('token', 'helo')
            setLoggedin(true)
        }
    }

    if (Loggedin) {
        return <Redirect to='/admin' />
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={(e) => { submitForm(e) }}>
                <label>
                    Username:
                    <input
                        type='text'
                        placeholder='Enter Email...'
                        name='usename'
                        value={Name}
                        onChange={(e) => { NameHandler(e) }}
                    />
                </label>
                <br /><br />
                <label>
                    Password:
                    <input
                        type='password'
                        name='password'
                        value={Password}
                        onChange={(e) => { PasswordHandler(e) }}
                    />
                </label>
                <br /><br />
                <input
                    type='submit'
                />
            </form>
        </div>
    )
}



export default Login
