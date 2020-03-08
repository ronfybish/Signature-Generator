import React, { Component } from 'react'
import AppInputList from '../leftContainer/AppInputList'
import {  Collapse, Button, ButtonGroup, Card, CardBody } from 'reactstrap';


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
        const content=this.state.openTab[0].isActive
        const social=this.state.openTab[1].isActive
        const images=this.state.openTab[2].isActive
        const style=this.state.openTab[3].isActive
        
        return (
            <div>
                <Card className="bg-white ">
                <ButtonGroup className="mt-3 mx-1">
                    <Button className={content!==""?"active text-white rounded-pill":"m-1 rounded-pill"} color="light" style={content!==""?{background:"#8214B6"}:{borderColor:"#8214B6",color:"#8214B6"}}   onClick={() => this.toggleTab("content")}>General</Button>
                    <Button className={social!==""?"active text-white rounded-pill":"m-1 rounded-pill"} color="light"  style={social!==""?{background:"#8214B6"}:{borderColor:"#8214B6",color:"#8214B6"}}  onClick={() => this.toggleTab("social")}>Links</Button>
                    <Button className={images!==""?"active text-white rounded-pill":"m-1 rounded-pill"} color="light"  style={images!==""?{background:"#8214B6"}:{borderColor:"#8214B6",color:"#8214B6"}}  onClick={() => this.toggleTab("images")}>images</Button>
                    <Button className={style!==""?"active text-white rounded-pill":"m-1 rounded-pill"} color="light"  style={style!==""?{background:"#8214B6"}:{borderColor:"#8214B6",color:"#8214B6"}}  onClick={() => this.toggleTab("style")} >Design</Button>
                </ButtonGroup>
                <Collapse isOpen={whosOpen.isOpen}>
                        <CardBody className="py-3">
                            <AppInputList change={this.props.change} listName={whosOpen.name} getList={this.props.getList}/>
                        </CardBody>
                </Collapse>
                </Card>
            </div>
        )
    }
}