import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, FormText, Row, Col, Collapse, Container, Button, ButtonGroup } from 'reactstrap';

export default class AppCollapseNavBar extends Component {
    constructor(props){
        super(props)

        this.state={
            openTab:[{name:"content",isOpen:true,isActive:"active"},{name:"social",isOpen:false,isActive:""},{name:"images",isOpen:false,isActive:""},{name:"style",isOpen:false,isActive:""}]
        }

    }
    toggleTab(id){
        let newOpenTab=[];
        this.state.openTab.forEach(el=>{
            if(el.name===id) newOpenTab.push({name:el.name,isOpen:true,isActive:"active"});
            else newOpenTab.push({name:el.name,isOpen:false,isActive:""});
        })
        this.setState({openTab:newOpenTab});
    }


    render() {
        return (
            <div>
                <ButtonGroup className="d-flex">
                    <Button outline className={this.state.openTab[0].isActive} color="primary" onClick={() => this.toggleTab("content")}>content</Button>
                    <Button outline className={this.state.openTab[1].isActive} color="primary" onClick={() => this.toggleTab("social")}>social</Button>
                    <Button outline className={this.state.openTab[2].isActive} color="primary" onClick={() => this.toggleTab("images")}>images</Button>
                    <Button className={this.state.openTab[3].isActive} outline color="primary" onClick={() => this.toggleTab("style")} >style</Button>
                </ButtonGroup>
                <Collapse isOpen={this.state.openTab[0].isOpen}>
                    <Container className="my-4">
                        <Form>
                            <Row form>
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                </FormGroup>
                                </Col>
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                                </FormGroup>
                                </Col>
                            </Row>
                        </Form>   
                    </Container>    
                </Collapse>
                <Collapse isOpen={this.state.openTab[1].isOpen}>
                    
                            Social
                       
                </Collapse>
                <Collapse isOpen={this.state.openTab[2].isOpen}>
                   
                            images
                    
                </Collapse>
                <Collapse isOpen={this.state.openTab[3].isOpen}>
                   
                            style
                     
                </Collapse>
                
            </div>
        )
    }
}