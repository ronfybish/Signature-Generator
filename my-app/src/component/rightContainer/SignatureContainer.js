import React from 'react';
import SignatureDisplay from './SignatureDisplay'
import ModalDisplay from './ModalDisplay'
import { Card, CardBody, CardHeader,} from 'reactstrap';


const SignatureContainer= (props) =>{
    return(
            <div>
                <Card className="border rounded mb-2">
                    <CardHeader>
                        <p className="text-justify">
                        <strong>Hey,</strong><br/>
                        This is the preview of your real signature.<br/>
                        Fill up your details and signature design in the column on the left.
                        </p>
                    </CardHeader>
                    <CardBody >
                        <div className="border d-flex flex-column rounded">
                            <div className="d-flex rounded p-2" style={{background:"#B7B3B7"}}>
                                <div className="pl-2 mr-auto text-white">New Message</div>
                                <div className="text-white">x</div>
                            </div>
                            <div className="mb-2 pl-2 pt-2 text-muted border-muted border-bottom">To:</div>
                            <div className="border-muted pl-2 text-muted border-bottom">Subject:</div>
                            <div className="p-3">
                                        <p>Dear Mr. User</p>
                                        <p>Thank you for taking the time to create your signature.<br/> I look forward to hearing from you!</p>
                                        <p>Sincerely,<br/> Ron Fybish</p>
                                {
                                    props.isChange?
                                    <SignatureDisplay list={props.list}/>
                                    :
                                    <div>
                                        <img className="mt-3 mb-3" alt="signature-example-img" style={{maxWidth:"280px"}} src={require('../../img/‏‏ll.JPG')}/>
                                    </div>
                                        
                                }
                            </div>
                        </div>      
                    </CardBody>
                </Card>
                    <ModalDisplay  list={props.list}  toggle={props.toggle} isOpen={props.isOpen}/>
            </div>
            )
}

export default SignatureContainer;

