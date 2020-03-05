import React, { Component } from 'react'
import {  Container } from 'reactstrap';

export default class AppJumbotron extends Component {
    render() {
        return (
            <div>
              <Container fluid className=" py-5">
                <h1 className="display-4 text-center" style={{color:"#8214B6"}}>Create your free email signature</h1>
                <p className="lead text-center pt-3">Use this to make your custom and ready-to-use email signature for your professional use.<br/>
                Just create your signature, and copy & paste to your email account</p>
              </Container>
          </div>
        )
    }
}