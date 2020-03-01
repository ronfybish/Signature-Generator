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
      content:[{index:"1",id:'Full Name',type:"text",userInput:'',min:"20",max:"40"},{index:"2",id:'Role',type:"text",userInput:'',min:"20",max:"40"},{index:"1",id:'Email',type:"text",userInput:'',min:"20",max:"40"},{index:"2",id:'Phone',type:"text",userInput:'',min:"0",max:"0"},{index:"1",id:'Address',type:"text",userInput:'',min:"0",max:"0"},{index:"2",id:'Website',type:"text",userInput:'',min:"0",max:"0"}],
      social:[{index:"1",id:'FaceBook',userInput:'',type:"text",userInput:'',min:"20",max:"40",icon:'./facebook.png'},{index:"2",id:'Instagram',userInput:'',type:"text",userInput:'',min:"20",max:"40",icon:'./instagram.png'},{index:"1",id:'Twitter',userInput:'',type:"text",userInput:'',min:"20",max:"40",icon:'./twitter.png'},{index:"2",id:'Linkedin',userInput:'',type:"text",userInput:'',min:"20",max:"40",icon:'./linkedin.png'}],
      images:[{index:"1",id:"Logo",type:'file',userInput:'',min:"30",max:"50"},{index:"2",id:"Profile",type:'file',userInput:'',min:"30",max:"50"}],
      style:[{index:"1",id:"Background Color",userInput:'',type:'color',min:"20",max:"40"},{index:"2",id:"text color",userInput:'',type:'color',min:"20",max:"40"},{index:"1",id:"Font size",userInput:'20',type:'range',min:"20",max:"40"},{index:"2",id:"Row spacing",userInput:'0',type:'range',min:"0",max:"10"},{index:"1",id:"Logo size",userInput:'20',type:'range',min:"20",max:"40"},{index:"2",id:"Logo border Radius",userInput:'0',type:'range',min:"20",max:"40"},{index:"1",id:"Profile image size",userInput:'20',type:'range',min:"20",max:"40"},{index:"2",id:"Profile Image rounding",userInput:'0',type:'range',min:"20",max:"40"},{index:"1",id:"Social size",userInput:'20',type:'range',min:"20",max:"40"},{index:"2",id:"Social rounding",userInput:'0',type:'range',min:"0",max:"40"}],
      isOpenNavBar:false
    }
    this.toggleNavBar=this.toggleNavBar.bind(this)
  }

  toggleNavBar(){
    this.setState({isOpenNavBar:!this.state.isOpenNavBar});
  }

  handleInputChange = (event,inputId,listName) =>{
    event.preventDefault();
    let updateList=this.state[listName];
    let updateObj=updateList.find(el=>el.id===inputId)
    let index= updateList.findIndex(el=>el.id===inputId);
    
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (event) => {
        updateObj.userInput=event.target.result;
        updateList[index]=updateObj;
        this.setState({listName:updateList})
        console.log(updateObj);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
    else{
      updateObj.userInput=event.target.value;
      updateList[index]=updateObj;
      this.setState({listName:updateList})
    }
      
  }

  getList = (listName) => {
    return this.state[listName];
  }

  render() {
    return (
      <div className="App">
        <AppNavBar toggle={this.toggleNavBar} isOpen={this.state.isOpenNavBar}></AppNavBar>
        <AppHeading></AppHeading>
        <Container>
          <Row>
            <Col md={6} className="col-right p-4">
                <AppCollapseNavBar change={this.handleInputChange} getList={this.getList} ></AppCollapseNavBar>
            </Col>
            <Col md={6} className="col-left p-4"></Col>
          </Row>
        </Container>
      </div>
    )
  }
}


export default App;
