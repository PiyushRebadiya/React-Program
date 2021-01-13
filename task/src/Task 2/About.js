import React from 'react'
import Header from './Header'
import { Redirect } from 'react-router-dom'

function About() {
 
    if(localStorage.key(0) === null){
        return <Redirect to='/' />
    }
    
    return (
        <div>
            <Header />
            <h1  className='MenuStyle'>This is About Page.....</h1>
        </div>
    )
}

export default About
