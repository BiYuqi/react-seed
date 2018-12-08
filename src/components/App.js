import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom'

import IframeMsg from './IframeMsg'
import EventTest from './EventTest'
import TodoApp from './TodoApp'

import './App.scss'

export default class BaseLayout extends React.Component {
  render() {
    return (
      <Router>
        <div className="home-page">
          <div className="header">
            <h3 className="home-title">React从零搭建项目&&入门Demo</h3>
          </div>
          <div className="layout">
            <ul className="navigator">
              <li><NavLink exact to="/" activeClassName="router-active">IframeMsg</NavLink></li>
              <li><NavLink to="/events" activeClassName="router-active">EventTest</NavLink></li>
              <li><NavLink to="/todo" activeClassName="router-active">TodoApp</NavLink></li>
            </ul>
            <div className="router-render-area">
              <Switch>
                <Route exact path="/" component={IframeMsg} />
                <Route path="/events" component={EventTest}></Route>
                <Route path="/todo" component={TodoApp}></Route>
                <Redirect to="/"></Redirect>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}