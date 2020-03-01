import React from 'react';
import AppInput from './AppInput'
import {Form, Row, Col, Container} from 'reactstrap'

const InputList= props =>(
    
    <div>
        <Container className="d-flex ">
            <Form>
                <Row form>
                {
                    props.getList(props.listName).map(el=>{
                        return <AppInput change={props.change} listName={props.listName} userInput={el.userInput}  key={el.id} min={el.min} max={el.max} id={el.id} type={el.type} />
                    })
                }
                </Row>
            </Form>
        </Container>     
    </div>
)
export default InputList;