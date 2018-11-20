import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'

import IframeMsg from '@/components/IframeMsg'
import EventTest from '@/components/EventTest'
// import Home from '@/components/HomeIndex'

import './App.scss'

const BaseLayout = () => {
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

export default BaseLayout