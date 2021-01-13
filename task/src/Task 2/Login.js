import React from 'react'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'

function Login() {
    const [Name, setName] = useState('')
    const [Password, setPassword] = useState('')
    const [Loggedin, setLoggedin] = useState(false)
    const [UserName, setUserName] = useState(false)
    const [PasswordName, setPasswordName] = useState(false)

    const NameHandler = (e) => {
        setName(e.target.value)

    }
    const PasswordHandler = (e) => {
        setPassword(e.target.value)

    }

    const submitForm = (e) => {
        e.preventDefault();
        if (Name === 'a' && Password === 'a') {
            localStorage.setItem('token', 'helo')
            setLoggedin(true)
        }

        if (Name !== 'a') {
            setUserName(true)
        } else {
            setUserName(false)
        }

        if (Password !== 'a') {
            setPasswordName(true)
        } else {
            setPasswordName(false)
        }
        setName('')
        setPassword('')
    }

    if (Loggedin === true) {
        return <Redirect to='/admin' />
    }

    if(localStorage.key(0) === 'token'){
        return <Redirect to='/admin' />
    }


    // if (localStorage.key(0) === 'token') {
    //     return <Redirect to='/admin' />
    // }

    // if(localStorage.key(0) === null){
    //     return <Redirect to='/' />
    // }

    return (
        <div className='MainDiv'>
            <br />
            <h1><span className='login'>Login</span> <span className='page'>Page</span></h1>
            <br/>
            <form onSubmit={(e) => { submitForm(e) }}>
                    <input
                        type='text'
                        placeholder='Username...'
                        name='usename'
                        value={Name}
                        onChange={(e) => { NameHandler(e) }}
                        className='input'
                    />
                <br />
                {UserName ? <p style={{ color: 'red', fontSize: '15px' }}>Please Enter Correct Email</p> : ''}
                <br />
                    <input
                        type='password'
                        name='password'
                        value={Password}
                        placeholder='Password...'
                        onChange={(e) => { PasswordHandler(e) }}
                        className='input'
                    />
                <br />
                {PasswordName ? <p style={{ color: 'red', fontSize: '15px' }}>Please Enter Correct Password</p> : ''}
                <br />
                <input
                    className='testbutton'
                    type='submit'
                />
            </form>
        </div>
    )
}



export default Login
