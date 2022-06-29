import './App.css';
import React,{Component} from 'react'
import Header from './Components/Header';
import Home from './Components/Home';
import Weather from './Components/Weather';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         change:1
      }
    }
    change0Handler = (event)=>{
      event.preventDefault();
      this.setState({change:1})
    }
    change1Handler = (event)=>{
      event.preventDefault();
      this.setState({change:0})
    }
    render(){
      return(
        <div>
          <Header change0 = {this.change0Handler} change1 = {this.change1Handler}></Header>
          {this.state.change?<Home change1={this.change1Handler}></Home>:<Weather/>}
        </div>
      )
    }

}
export default App;