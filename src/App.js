import React from 'react'
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Weather from './Components/Weather';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
    return (
        
        <Router>
          <Header />
          <Switch>
            <Route path="/weather">
              <Weather />
            </Route>
            <Route path="/">
              <Home />
              {/* <Weather/> */}
            </Route>
          </Switch>
        </Router> 
        
    );
}
export default App;