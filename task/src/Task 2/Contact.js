import React from 'react'
import Header from './Header'
import { Redirect } from 'react-router-dom'
import './App.css'


function Contact() {
 
    if(localStorage.key(0) === null){
        return <Redirect to='/' />
    }
    
    return (
        <div>
            <Header />
            <h1  className='AboutStyle'>This is Contact Page.....</h1>
        </div>
    )
}

export default Contact