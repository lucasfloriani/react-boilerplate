import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { HomePage, SamplePage, NotFoundPage } from './index'
// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }
  body.ReactModal__Body--open {
    overflow: hidden;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/sample-page" component={SamplePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </React.Fragment>
    </ThemeProvider>
  )
}

export default App
