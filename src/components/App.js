import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { HomePage, SamplePage, NotFoundPage } from './index'
// https://github.com/diegohaz/arc/wiki/Styling
import { theme, GlobalStyles } from './themes/default'

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
