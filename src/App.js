import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";
import Main from "./pages/Main"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import About from "./pages/About"



function App() {

  return (
    <HashRouter>
    <Router>
      <Switch>

        <Route exact path={'/contact'} component={Contact}>

        </Route>
        <Route exact path={'/projects'} component={Projects}>

        </Route>
        <Route exact path={'*'} component={About}>

        </Route>

      </Switch>
    </Router>
    </HashRouter>
  );
}

export default App;
