import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";
import Main from "./pages/Main"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AboutMe from "./components/AboutMe"
import MyProjects from "./components/MyProjects"
import ContactMe from "./components/ContactMe"


function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <AboutMe />
            <Footer />
          </Route>
          <Route exact path='/contact'>
            <Header />
            <ContactMe />
            <Footer />
          </Route>
          <Route exact path='/projects'>
            <Header />
            <MyProjects />
            <Footer />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
