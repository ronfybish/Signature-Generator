import React from 'react';
import { FormGroup, Label, Input,CustomInput } from 'reactstrap';


const AppInput= props =>(
    <div>
        {
        props.type==="file"?
            <FormGroup >
                <Label for={props.id}>{props.id} Image</Label>
                <CustomInput type="file" id={props.id} name="customFile" onChange={(event)=>props.imgChange(event,props.id,props.listName)} label="Pick a file!" />
            </FormGroup>
            :
            <FormGroup className="mr-2">
                <Label for={props.id}>{props.id} :</Label>
                <Input placeholder={props.listName==="social"?`${props.id} URL`:null} style={{borderRadius:"12px",background:"#F5F2F5"}}  type={props.type} value={props.userInput} min={props.min} max={props.max} id={props.id} onChange={(event)=>props.change(event,props.id,props.listName)} className={props.type==="range"?"custom-range":null} />
            </FormGroup>
        }
    </div>
)

export default AppInput;