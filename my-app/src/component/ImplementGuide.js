import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
export default class ImplementGuide extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="text-center mt-5">
                    <h1 className="display-3" style={{color:"#8214B6"}}>How to Add Your Email Signature </h1>
                    <p>(Gmail, Yahoo, Outlook and more)</p>
                </Jumbotron>
                <ListGroup>
                    
                    <ListGroupItem>1. Open <a href="www.gmail.com">Gmail</a></ListGroupItem>
                    <ListGroupItem>2. In the top right corner, click <img height="30px"  src={require('../img/setting.png')}/>
                        <strong> --> </strong>
                     Settings </ListGroupItem>
                    <ListGroupItem>3. In the "Signature" section, add your signature text in the box. If you want, you can format your message by adding an image or changing the text style</ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}
