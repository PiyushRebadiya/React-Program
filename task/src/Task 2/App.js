import React from 'react'
import Login from './Login'
import LogOut from './LogOut'
import Admin from './Admin'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/admin' component={Admin} />
                    <Route exact path='/logout' component={LogOut} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App

