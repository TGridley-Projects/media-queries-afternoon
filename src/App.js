import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      dropDownVisible: false,
    }
  }
  
  
  render(){
    return (
      <div className="app">
        <div className="mainHeader">
          <img className="headerLogo" src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"/>
          <img className="bgImage" src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/header-bg.jpg"/>
          <nav className="desktopMenu">
            <span>SERVICES</span>
            <span>PORTFOLIO</span>
            <span>ABOUT</span>
            <span>TEAM</span>
            <span>CONTACT</span>
          </nav>
        </div>  
      </div>  
    )  
}
}

export default App;
