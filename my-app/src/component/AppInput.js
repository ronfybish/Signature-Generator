import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';


const AppInput= props =>(
    <div>
        {
        props.type==="file"?
            <div className="custom-file">
                <Input type="file" id="myfile" className="custom-file-input"></Input>
                <Label className="custom-file-label  border-primary" for="myfile">{props.id} Img</Label>
            </div>
            :
            <FormGroup className="mr-2">
                <Label for={props.id}>  {props.id}:</Label>
                <Input style={{borderRadius:"12px",background:"#F5F2F5"}}  type={props.type} value={props.type==='file'?'':props.userInput} id={props.id} onChange={(event)=>props.change(event,props.id,props.listName)} className={props.type==="range"?"custom-range":null} />
            </FormGroup>
        }
    </div>
)

export default AppInput;