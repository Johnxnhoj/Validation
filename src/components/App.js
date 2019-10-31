import React from "react"
import Profile from "./Profile"
import Updated from "./Updated"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App(props) {
  return (
    <Router>
      <nav>
        <Route exact path="/" component={Profile} />
        <Route path="/submitted" component={Updated} />
      </nav>
    </Router>
  )
}

export default App
