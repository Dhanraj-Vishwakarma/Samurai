import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { ComingSoon, UserAccount } from "./Pages"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" name="Login Page" component={UserAccount} />
        <Route path="*" name="Login Page" component={ComingSoon} />
      </Switch>
    </Router>
  )
}

export default App
