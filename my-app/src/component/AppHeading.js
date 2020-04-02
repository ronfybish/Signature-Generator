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
                <p className='text-center'>
                <a href="https://www.producthunt.com/posts/just-sign-2?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-just-sign-2" target="_blank" rel="noopener noreferrer"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=189309&theme=light&period=daily" alt="Just Sign - Build your email signature in less than 60 seconds | Product Hunt Embed" style={{width:"250px", height: "54px"}} width="250px" height="54px" /></a>
                </p>
              </Container>
          </div>
        )
    }
}