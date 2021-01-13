import React from 'react'
import Header from './Header'
import { Redirect } from 'react-router-dom'

function Home() {
   

    if(localStorage.key(0) === null){
        return <Redirect to='/' />
    }
    
    return (
        <div>
            <Header />
            <h1  className='MenuStyle'>This is Home Page...... </h1>
        </div>
    )
}

export default Home
