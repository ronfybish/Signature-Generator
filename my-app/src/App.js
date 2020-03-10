import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import {storage} from './services/firebase'
import AppNavBar from './component/AppNavBar'
import AppHeading from './component/AppHeading'
import AppCollapseNavBar from './component/leftContainer/AppCollapseNavBar'
import SignatureContainer from './component/rightContainer/SignatureContainer'
import UserGuide from './component/UserGuide'
import './App.css';



class App extends Component {
  constructor(props){
    super(props)

    this.state={
      content:[{index:"1",id:'Full Name',type:"text",userInput:'',min:"20",max:"40"},{index:"2",id:'Role',type:"text",userInput:'',min:"20",max:"40"},{index:"1",id:'Email',type:"text",userInput:'',min:"20",max:"40"},{index:"2",id:'Phone',type:"text",userInput:'',min:"0",max:"0"},{index:"1",id:'Address',type:"text",userInput:'',min:"0",max:"0"},{index:"2",id:'Website',type:"text",userInput:'',min:"0",max:"0"}],
      social:[{index:"1",id:'FaceBook',userInput:'',type:"text",min:"20",max:"30",icon:'facebook.png'},{index:"2",id:'Instagram',type:"text",userInput:'',min:"20",max:"30",icon:'instagram.png'},{index:"1",id:'Twitter',type:"text",userInput:'',min:"20",max:"30",icon:'twitter.png'},{index:"2",id:'Linkedin',type:"text",userInput:'',min:"20",max:"30",icon:'linkedin.png'}],
      images:[{index:"1",id:"Logo",type:'file',userInput:'',min:"35",max:"60"},{index:"1",id:"Profile",type:'file',userInput:'',min:"35",max:"60"}],
      style:[{index:"1",id:"Background Color",userInput:'',type:'color',min:"20",max:"40"},{index:"1",id:"Text Color",userInput:'',type:'color',min:"20",max:"40"},{index:"2",id:"Background Rounding",userInput:'0',type:'range',min:"0",max:"35"},{index:"2",id:"Row Spacing",userInput:'2',type:'range',min:"2",max:"5"},{index:"1",id:"Logo Size",userInput:'65',type:'range',min:"65",max:"80"},{index:"2",id:"Logo Image Rounding",userInput:'0',type:'range',min:"20",max:"40"},{index:"1",id:"Profile Image Size",userInput:'55',type:'range',min:"55",max:"61"},{index:"2",id:"Profile Image Rounding",userInput:'0',type:'range',min:"0",max:"40"},{index:"1",id:"Social Size",userInput:'20',type:'range',min:"20",max:"22"},{index:"2",id:"Social Rounding",userInput:'0',type:'range',min:"0",max:"30"}],
      isOpenNavBar:false,
      isOpenModal:false,
      isChange:false,
      copied: false,
    }

  }

  handleImageChange=(event,inputId,listName)=>{
    if(event.target.files[0]){
      this.setState({isChange:true})
      const image=event.target.files[0];
      const uploadTask=storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed',
      (snapshot)=>{/*propgress*/},
      (error)=>{console.log(error)},
      ()=>{
          storage.ref('images').child(image.name).getDownloadURL().then(url=>{
          let updateList=this.state[listName];
          let updateObj=updateList.find(el=>el.id===inputId)
          let index= updateList.findIndex(el=>el.id===inputId);
          updateObj.userInput=url;
          updateList[index]=updateObj;
          console.log(url)
          this.setState({listName:updateList})
          })
        }
     )
    }
  }

  copy_to_clipboard=(id)=>{
    document.getElementById('html').select();
    document.execCommand('copy');
  } 

  componentDidMount(){ 
    this.state.social.forEach((el)=>{
      storage.ref(`social/${el.icon}`).getDownloadURL()
      .then(url=>{
        let updateList=this.state["social"];
        let updateObj=updateList.find(ell=>ell.id===el.id)
        let index= updateList.findIndex(ell=>ell.id===el.id)
        updateObj.icon=url;
        updateList[index]=updateObj;
        this.setState({listName:updateList})
      })  
    })     
  }
  toggleClipbord=()=>{
    this.setState({copied:!this.state.copied})
  }
  toggleNavBar=()=>{
    this.setState({isOpenNavBar:!this.state.isOpenNavBar});
  }

  toggleModal=()=>{
    this.setState({isOpenModal:!this.state.isOpenModal});
  }

  getList = (listName) => {
    return this.state[listName];
  }

  handleInputChange = (event,inputId,listName) =>{
    this.setState({isChange:true})
    event.preventDefault();
    let updateList=this.state[listName];
    let updateObj=updateList.find(el=>el.id===inputId)
    let index= updateList.findIndex(el=>el.id===inputId);
    updateObj.userInput=event.target.value;
    updateList[index]=updateObj;
    this.setState({listName:updateList})  
  }


  render() {
    return (
      <Router>
        <div className="App">
          <AppNavBar toggle={this.toggleNavBar} isOpen={this.state.isOpenNavBar}></AppNavBar>
          <Switch>
              <Route  path="/guide">
                <UserGuide/>
              </Route>
              <Route path="/">
                <AppHeading/>
                <Container>
                  <Row>
                    <Col md={{size:6,order:1}} lg={{size:6,order:1}}  xs={{order:2}} className="mb-2">
                        <AppCollapseNavBar imgChange={this.handleImageChange} change={this.handleInputChange} getList={this.getList} ></AppCollapseNavBar>
                    </Col>
                    <Col md={{size:6,order:2}}  lg={{size:6,order:2}} xs={{order:1}} >
                      <SignatureContainer  isChange={this.state.isChange}  isOpen={this.state.isOpenModal} toggle={this.toggleModal} list={this.state}/>
                    </Col>
                  </Row>
                </Container>
              </Route>
          </Switch>  
        </div>
      </Router>
    )
  }
}

export default App;
