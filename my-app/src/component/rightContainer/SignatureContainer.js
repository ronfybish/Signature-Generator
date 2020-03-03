import React from 'react';
import SignatureDisplay from './SignatureDisplay'
import ModalDisplay from './ModalDisplay'
import { Card,Row,Col, CardBody,CardTitle, CardHeader,CardFooter } from 'reactstrap';


const SignatureContainer= (props) =>{

    
    return(
            <div>
                <Card className="border rounded mb-2">
                    <CardHeader>
                        <p className="text-justify">
                                <strong>Hey,</strong><br/>
                                This is the preview of your signature.<br/>
                                You can edit the content and signature design in the column on the left.<br/>
                                Good luck :)</p>
                    </CardHeader>
                    <CardBody>
                        <CardTitle>
                            <Row inline="true" style={{background:"#404040"}} className="text-white rounded p-2">
                                <div className="mr-auto ">New Message</div>
                                <div>x</div>
                            </Row>
                            <Row className="text-muted my-4">
                                <Col>
                                    <div className="mb-2 border-muted border-bottom">To</div>
                                    <div className="border-muted border-bottom">Subject</div>
                                </Col>
                            </Row>
                        </CardTitle>
                            <SignatureDisplay list={props.list}/>
                    </CardBody>
                </Card>
                <ModalDisplay list={props.list}  toggle={props.toggle} isOpen={props.isOpen}/>
            </div>
            )
}

export default SignatureContainer;