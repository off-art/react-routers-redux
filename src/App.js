import React, { Component } from 'react'
import { Counter, Home, NewTask, Parrot, AddCat } from './Components'
import { Link, Switch, Route } from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/newtask" component={NewTask} />
        <Route exact path="/parrot" component={Parrot} />
        <Route exact path="/addcat" component={AddCat} />
      </Switch>
    )

    return (
      <div className="App">
        <nav className='navbar'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/newtask">New Task</Link>
            </li>
            <li>
              <Link to="/parrot">Parrot</Link>
            </li>
            <li>
              <Link to="/addcat">AddCat</Link>
            </li>
          </ul>
        </nav>


        {routes}
      </div>
    )
  }
}
export default App
