import React, { Component } from 'react'
import AppNavBar from './component/AppNavBar'
import AppHeading from './component/AppHeading'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      isOpenNavBar:false
    }
    this.toggleNavBar=this.toggleNavBar.bind(this)
  }
  toggleNavBar(){
    this.setState({isOpenNavBar:!this.state.isOpenNavBar});
  }

  render() {
    return (
      <div className="App">
        <AppNavBar toggle={this.toggleNavBar} isOpen={this.state.isOpenNavBar}></AppNavBar>
        <AppHeading></AppHeading>
      </div>
    )
  }
}


export default App;
