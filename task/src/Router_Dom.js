import React from 'react'
// import { Route, Switch } from 'react-router-dom'
import Menu from './Menu'
import About from './About'
import Contact from './Contact'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function Router_Dom() {
    return (
        <BrowserRouter>
            <div>
                <Menu />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

function Home() {
    return (
        <div className='ContactStyle'>
            <h1>This Is My Home Page</h1>
        </div>
    )
}

export default Router_Dom;
