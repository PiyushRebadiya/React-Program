import React, { useState } from 'react'

function Input() {
    const [Name, setName] = useState('');
    const [Age, setAge] = useState('');
    const [Email, setEmail] = useState('');

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const ageHandler = (e) => {
        setAge(e.target.value)
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
    return (
        <div>
           Name: <input type='text' placeholder='Add Name...' value={Name} onChange={nameHandler}/><br/><br/>
            Age: <input type='text' placeholder='Age...' value={Age} onChange={ageHandler}/><br/><br/>
            Email: <input type='text' placeholder='Add Email Address...' value={Email} onChange={emailHandler}/><br/><br/>
        </div>
    )
}

export default Input;

