import React from 'react';
import AppInput from './AppInput'
import {Form, Row, Col, Container} from 'reactstrap'

const InputList= props =>(
    
    <div>
        <Container >
            <Form>
                <Row form>
                    <Col md="6" >    
                        {
                            props.getList(props.listName).map(el=>{
                                if(el.index==="1"){
                                    return <AppInput change={props.change} listName={props.listName} userInput={el.userInput}  key={el.id} min={el.min} max={el.max} id={el.id} type={el.type} />
                                }
                                return null;
                            })
                        }
                    </Col>
                    <Col md="6">    
                        {
                            props.getList(props.listName).map(el=>{
                                if(el.index==="2"){

                                    return <AppInput change={props.change} listName={props.listName} userInput={el.userInput}  key={el.id} min={el.min} max={el.max} id={el.id} type={el.type} />
                                }
                                return null;
                            })
                        }
                    </Col>
                </Row>
            </Form>
        </Container>     
    </div>
)
export default InputList;