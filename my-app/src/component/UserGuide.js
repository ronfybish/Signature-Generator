import React, { Component } from 'react'
import { Jumbotron, Button} from 'reactstrap';
import { ListGroup, ListGroupItem, Container } from 'reactstrap';
export default class UserGuide extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="text-center mb-5 ">
                    <h1 className="display-3" style={{color:"#8214B6"}}>User Guide</h1>
                    <h3>How to Add Your Email Signature</h3>
                    <p>(Gmail, Apple, Outlook and more)</p>
                    <hr/>
                    <Button className="my-2 px-5" style={{background:"#8214B6"}}><a  href="www.just-sign.com" style={{color:"white"}}>Start 
                     Your Own Email Signature</a></Button>
                </Jumbotron>
                <Container>
                    <h2 className="text-center">How can I append my email signature to Gmail?</h2>
                    <ListGroup>
                        <ListGroupItem className="py-3">
                            <h4>1. Login to your Gmail account. <a target="_blank" rel="noopener noreferrer"  href="www.gmail.com">Gmail</a></h4></ListGroupItem>
                        <ListGroupItem >
                            <h4>2.Go to 'Settings' by clicking the  <strong>--></strong> <img height="30px" alt="seeting-icon" src={require('../img/setting.png')}/>  icon in the top right corner of your screenIn the top right corner</h4>
                            <div><img height="150px" alt="img-guide1" src={require('../img/user_guide1.jpg')}/></div>
                            </ListGroupItem>
                        <ListGroupItem  >
                            <h4>3.Click 'Settings' in the drop down menu</h4>
                            <div ><img height="150px" alt="img-guide11" src={require('../img/user_guide2jpg.jpg')}/></div>
                        </ListGroupItem>
                        <ListGroupItem >
                            <h4 >4.Under the 'General' tab, scroll down to find 'Signature'<br/> and then paste there your new email signature already copied in the clipboard</h4>
                            <div ><img height="150px" alt="img-guide2" width="280px" src={require('../img/user_guide3.png')}/></div>
                            </ListGroupItem>
                        <ListGroupItem>
                            <h4>5. Click on the 'Save changes' at the bottom of the page.</h4>
                            <div ><img height="150px" alt="img-guide3" src={require('../img/user_guide4.jpg')}/></div>
                            </ListGroupItem>
                    </ListGroup>
                </Container>
                <br/>
                <br/>
                <Container>
                    <h2 className="text-center">How can I append my email signature to Outlook?</h2>
                    <ListGroup>
                        <ListGroupItem className="py-3">
                            <h4>1. Log in to your Outlook account. <a target="_blank" rel="noopener noreferrer" href="www.outlook.com">Outlook</a></h4></ListGroupItem>
                        <ListGroupItem >
                            <h4>2. Click on 'File' and then 'Options' in the top left corner of your screen</h4>
                                <div className="mb-3" ><img height="150px" alt="img-guide10" src={require('../img/outlook1.png')}/></div><hr/>
                                <div ><img height="150px" alt="img-guide9" src={require('../img/outlook2.png')}/></div>
                            </ListGroupItem>
                        <ListGroupItem  >
                            <h4>3.Select 'Mail' from the 'Options' menu
                            Click on 'Signatures' and the signature that you like to create or edit</h4>
                            <div ><img height="150px" alt="img-guide8" width="280px" src={require('../img/outlook5s.png')}/></div>
                        </ListGroupItem>
                        <ListGroupItem >
                            <h4 >4. Paste there your new email signature already copied in the clipboard and choose your preferences. </h4>
                            <div ><img  height="150px" alt="img-guide7"  src={require('../img/outlook3.png')}/></div>
                            </ListGroupItem>
                        <ListGroupItem>
                            <h4>5. then save the changes </h4>
                        </ListGroupItem>
                    </ListGroup>
                </Container>
                <br/>
                <br/>
                <Container>
                    <h2 className="text-center">How can I append my email signature to Apple Mail?</h2>
                    <ListGroup>
                        <ListGroupItem className="py-3">
                            <h4>1. Log in to your Apple account <a target="_blank" rel="noopener noreferrer" href="https://www.icloud.com/mail">Apple Mail</a></h4></ListGroupItem>
                        <ListGroupItem >
                            <h4>2. In the top left corner of your screen, click 'Mail' and then 'Preferences'</h4>
                                <div ><img height="150px" alt="img-guide6" width="280px" src={require('../img/apple1.png')}/></div>
                            </ListGroupItem>
                        <ListGroupItem  >
                            <h4>3.Select 'Mail' from the 'Options' menu
                            Click on 'Signatures' and the signature that you like to create or edit</h4>
                            <div ><img alt="img-guide5" height="150px" src={require('../img/apple2.gif')}/></div>
                        </ListGroupItem>
                        <ListGroupItem >
                            <h4 >4. Paste there your new email signature already copied in the clipboard and choose your preferences. </h4>
                            <div ><img width="280px" height="150px" alt="img-guide4" src={require('../img/apple3.jpg')}/></div>
                            </ListGroupItem>
                        <ListGroupItem>
                            <h4>5. then save the changes </h4>
                        </ListGroupItem>
                    </ListGroup>
                </Container>
                
            </div>
        )
    }
}
