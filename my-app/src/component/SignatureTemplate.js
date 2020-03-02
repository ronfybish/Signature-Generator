import React from 'react';
import SignatureDisplay from './SignatureDisplay'
import AppModal from './AppModal'
import { Card,  CardBody,CardTitle, } from 'reactstrap';


const SignatureTemplate= (props) =>{

    
    return(
            <div>
                <Card className="border rounded mb-2">
                    <CardBody>
                        <CardTitle>
                            <p className="text-justify">
                                <strong>Hey,</strong><br/>
                                This is the preview of your signature.<br/>
                                You can edit the content and signature design in the column on the left.<br/>
                                Good luck :)</p>
                        </CardTitle>
                            <SignatureDisplay list={props.list}/>
                    </CardBody>
                </Card>
                <AppModal toggle={props.toggle} isOpen={props.isOpen}/>
            </div>
            )
}

export default SignatureTemplate;