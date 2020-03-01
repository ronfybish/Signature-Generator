import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';


const AppInput= props =>(
    <div>
        <FormGroup className="mr-2">
            <Label for={props.id}>  {props.id}:</Label>
            <Input style={{borderRadius:"12px",background:"#F5F2F5"}} type={props.type} value={props.type==='file'?'':props.userInput} id={props.id} onChange={(event)=>props.change(event,props.id,props.listName)}  />
        </FormGroup>
    </div>
)

export default AppInput;