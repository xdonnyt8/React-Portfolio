import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import About from "./pages/About"



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={Main}>

        </Route>
        <Route exact path={'/contact'} component={Contact}>

        </Route>
        <Route exact path={'/projects'} component={Projects}>

        </Route>
        <Route exact path={'/about'} component={About}>

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
