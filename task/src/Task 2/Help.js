import React from 'react'
import Header from './Header'
import { Redirect } from 'react-router-dom'
import './App.css'


function Help() {
  
    if(localStorage.key(0) === null){
        return <Redirect to='/' />
    }
    
    return (
        <div>
            <Header />
            <h1  className='AboutStyle'>This is Help Page.....</h1>
        </div>
    )
}

export default Help
