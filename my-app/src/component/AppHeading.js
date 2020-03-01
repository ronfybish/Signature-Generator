import React, { Component } from 'react'
import {  Container } from 'reactstrap';

export default class AppJumbotron extends Component {
    render() {
        return (
            <div>
              <Container fluid className="text-center py-5">
                <h1 className="display-4" style={{color:"#8214B6"}}>Email Signature Template Generator</h1>
                <p className="lead font-weight-bold py-3">Create an email signature template with our easy-to-use generator.</p>
              </Container>
          </div>
        )
    }
}