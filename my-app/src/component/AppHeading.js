import React, { Component } from 'react'
import {  Container } from 'reactstrap';

export default class AppJumbotron extends Component {
    render() {
        return (
            <div>
              <Container fluid className="py-4">
                <h1 className="display-4 text-center" style={{color:"#8214B6"}}>Create your free email signature</h1>
                <p className="lead clearfix text-center pt-3">Use this to make your custom and ready-to-use email signature for your professional use.<br/>
                Just create your signature, and copy & paste to your email account
                </p>
                {/* <p className="text-center">
                  <a href="https://www.producthunt.com/posts/just-sign?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-just-sign" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=187673&theme=light"  alt="Just Sign-Create your free email signature in less then 60 seconds !"/></a>
                  </p> */}
                
              </Container>
          </div>
        )
    }
}