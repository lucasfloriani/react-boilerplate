// https://github.com/diegohaz/arc/wiki/Example-app
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { basename } from './config'
import App from './components/App'

const renderApp = () => (
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
)

render(renderApp(), document.getElementById('app'))
