import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'

import Event from 'utils/pub-sub'

import App from './components/App.js'

import './index.scss'

window.$event = Event

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('app'))