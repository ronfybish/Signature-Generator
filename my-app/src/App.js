import React, { Component } from 'react'
import AppNavBar from './component/AppNavBar'
import AppHeading from './component/AppHeading'
import AppCollapseNavBar from './component/leftContainer/AppCollapseNavBar'
import SignatureContainer from './component/rightContainer/SignatureContainer'
import { Container, Row, Col } from 'reactstrap';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      content:[{index:"1",id:'Full Name',type:"text",userInput:'',min:"20",max:"40"},{index:"2",id:'Role',type:"text",userInput:'',min:"20",max:"40"},{index:"1",id:'Email',type:"text",userInput:'',min:"20",max:"40"},{index:"2",id:'Phone',type:"text",userInput:'',min:"0",max:"0"},{index:"1",id:'Address',type:"text",userInput:'',min:"0",max:"0"},{index:"2",id:'Website',type:"text",userInput:'',min:"0",max:"0"}],
      social:[{index:"1",id:'FaceBook',userInput:'',type:"text",min:"20",max:"30",icon:'facebook.png'},{index:"2",id:'Instagram',type:"text",userInput:'',min:"20",max:"30",icon:'instagram.png'},{index:"1",id:'Twitter',type:"text",userInput:'',min:"20",max:"30",icon:'twitter.png'},{index:"2",id:'Linkedin',type:"text",userInput:'',min:"20",max:"30",icon:'linkedin.png'}],
      images:[{index:"1",id:"Logo",type:'file',userInput:'',min:"35",max:"60"},{index:"1",id:"Profile",type:'file',userInput:'',min:"35",max:"60"}],
      style:[{index:"1",id:"Background Color",userInput:'',type:'color',min:"20",max:"40"},{index:"1",id:"Text Color",userInput:'',type:'color',min:"20",max:"40"},{index:"2",id:"Background Rounding",userInput:'0',type:'range',min:"0",max:"55"},{index:"2",id:"Row Spacing",userInput:'2',type:'range',min:"2",max:"5"},{index:"1",id:"Logo Size",userInput:'65',type:'range',min:"65",max:"80"},{index:"2",id:"Logo Image Rounding",userInput:'0',type:'range',min:"20",max:"40"},{index:"1",id:"Profile Image Size",userInput:'55',type:'range',min:"55",max:"61"},{index:"2",id:"Profile Image Rounding",userInput:'0',type:'range',min:"0",max:"40"},{index:"1",id:"Social Size",userInput:'20',type:'range',min:"20",max:"21"},{index:"2",id:"Social Rounding",userInput:'0',type:'range',min:"0",max:"30"}],
      isOpenNavBar:false,
      isOpenModal:false,
    }
    this.toggleNavBar=this.toggleNavBar.bind(this)
    this.toggleModal=this.toggleModal.bind(this)
  }

  toggleNavBar(){
    this.setState({isOpenNavBar:!this.state.isOpenNavBar});
  }
  toggleModal(){
    this.setState({isOpenModal:!this.state.isOpenModal});
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
            <Col md={{size:7,order:1}} lg={{size:6,order:1}}  xs={{order:2}} className="mb-2">
                <AppCollapseNavBar change={this.handleInputChange} getList={this.getList} ></AppCollapseNavBar>
            </Col>
            <Col md={{size:5,order:2}}  lg={{size:6,order:2}} xs={{order:1}} >
              <SignatureContainer  isOpen={this.state.isOpenModal} toggle={this.toggleModal} list={this.state}/>
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}


export default App;
