import React from 'react'
import Login from './Login'
import LogOut from './LogOut'
import Admin from './Admin'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Help from './Help'
import './App.css'
import Error from './Error'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'

function App() {

    return (
        <>
            <div className='MainDivFull'>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route exact path='/admin' component={Admin} />
                        <Route exact path='/logout' component={LogOut} />
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/contact' component={Contact} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/help' component={Help} />
                        <Redirect to='/' />
                    </Switch>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App

