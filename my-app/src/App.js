import React, { Component } from 'react'
import AppNavBar from './component/AppNavBar'
import AppHeading from './component/AppHeading'
import AppCollapseNavBar from './component/AppCollapseNavBar'
import { Container, Row, Col } from 'reactstrap';
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
        <Container>
          <Row>
            <Col md="6" className="col-right p-4">
                <AppCollapseNavBar></AppCollapseNavBar>
            </Col>
            <Col md="6" className="col-left p-4"></Col>
          </Row>
        </Container>
      </div>
    )
  }
}


export default App;
