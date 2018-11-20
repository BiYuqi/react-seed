import React from 'react'
import ReactDOM from 'react-dom'

import Event from 'utils/pub-sub'

import App from '@/components/App.js'

import './index.scss'

window.$event = Event

ReactDOM.render(<App />, document.getElementById('app'))