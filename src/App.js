import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      dropDownVisible: false
    }
  }

  toggleDropDown = () => {
    this.setState({
      dropDownVisible: !this.state.dropDownVisible
    })
  }
  
  
  render(){
    return (
      <div className="app">
        <div className="mainHeader">
          <img className="headerLogo" src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"/>
          <nav className="desktopMenu">
            <span>SERVICES</span>
            <span>PORTFOLIO</span>
            <span>ABOUT</span>
            <span>TEAM</span>
            <span>CONTACT</span>
          </nav>
          <div className="dropDown" onClick={this.toggleDropDown}>MENU &#9776;</div>
          {this.state.dropDownVisible ? (
            <nav className="mobileMenu">
              <span>SERVICES</span>
              <span>PORTFOLIO</span>
              <span>ABOUT</span>
              <span>TEAM</span>
              <span>CONTACT</span>
          </nav>
          ) : null}
        </div>  
      </div>  
    )  
}
}

export default App;
