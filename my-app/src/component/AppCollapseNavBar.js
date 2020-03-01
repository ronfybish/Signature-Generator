import React, { Component } from 'react'
import AppInputList from './AppInputList'
import {  Collapse, Container, Button, ButtonGroup, Card, CardBody } from 'reactstrap';

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
        const whosOpen = this.state.openTab.find(el=>el.isOpen===true);
        return (
            <div>
                <ButtonGroup className="d-flex">
                    <Button outline className={this.state.openTab[0].isActive} color="primary" onClick={() => this.toggleTab("content")}>content</Button>
                    <Button outline className={this.state.openTab[1].isActive} color="primary" onClick={() => this.toggleTab("social")}>social</Button>
                    <Button outline className={this.state.openTab[2].isActive} color="primary" onClick={() => this.toggleTab("images")}>images</Button>
                    <Button className={this.state.openTab[3].isActive} outline color="primary" onClick={() => this.toggleTab("style")} >style</Button>
                </ButtonGroup>
                <Collapse isOpen={this.state.openTab[0].isOpen}>
                    <Card>
                        <CardBody className="my-3 py-5">
                            <AppInputList change={this.props.change} listName={whosOpen.name} getList={this.props.getList}/>
                        </CardBody>
                    </Card>
                </Collapse>
                <Collapse isOpen={this.state.openTab[1].isOpen}>
                    <Card>
                        <CardBody className="my-3 py-5">
                            <AppInputList change={this.props.change} listName={whosOpen.name} getList={this.props.getList}/>
                        </CardBody>
                    </Card>
                </Collapse>
                <Collapse isOpen={this.state.openTab[2].isOpen}>
                    <Card>
                        <CardBody className="my-3 py-5">
                            <AppInputList change={this.props.change} listName={whosOpen.name} getList={this.props.getList}/>
                        </CardBody>
                    </Card>
                </Collapse>
                <Collapse isOpen={this.state.openTab[3].isOpen}>
                    <Card>
                        <CardBody className="my-3 py-5">
                            <AppInputList change={this.props.change} listName={whosOpen.name} getList={this.props.getList}/>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        )
    }
}