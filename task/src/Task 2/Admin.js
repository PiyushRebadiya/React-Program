import React from 'react'
import Header from './Header'
import './App.css'
import { useState } from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'

function Admin() {

    const token = localStorage.getItem('token');

    if (token === null) {
        return <Redirect to='/' />
    }

    
    
    // if(localStorage.key(0) === 'token'){
    //     return <Redirect to='/admin' />
    // }

    // const mainPage = () => {
    // const token = localStorage.removeItem('token')
   
    //  if(token){
    //     return <Redirect to='/' />
    // }
    // // console.log('asd');
    // }

    return (
        <>
            <div>
                <Header />
                <h1>This is Admin Page......</h1>
            </div>
        </>
    )
}


export default Admin