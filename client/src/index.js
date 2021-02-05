import React from 'react'
import ReactDom from 'react-dom'
import { provider } from 'redux'
import { createStore, compose } from 'react-redux'
import App from './App'
import './style.css'

ReactDom.render(<App />, document.getElementById('root'))
