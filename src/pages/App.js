import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import IframeMsg from '@/pages/IframeMsg'
import EventTest from '@/pages/EventTest'

import './App.scss'

export default class BaseLayout extends React.Component {
  render() {
    return (
      <Router>
        <div className="home-page">
          <div className="header">
            <h3 className="home-title">React从零搭建项目&&入门Demo</h3>
          </div>
          <ul className="navigator">
            <li><NavLink exact to="/" activeClassName="router-active">IframeMsg</NavLink></li>
            <li><NavLink to="/events" activeClassName="router-active">EventTest</NavLink></li>
          </ul>
          <div className="router-render-area">
            <Route exact path="/" component={IframeMsg} />
            <Route path="/events" component={EventTest}></Route>
          </div>
        </div>
      </Router>
    )
  }
}