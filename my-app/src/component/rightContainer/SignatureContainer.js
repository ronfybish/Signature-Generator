import React from 'react';
import SignatureDisplay from './SignatureDisplay'
import ModalDisplay from './ModalDisplay'
import { Card, CardBody, CardHeader,CardTitle} from 'reactstrap';
import ModalSignature from './ModalSignature'

const SignatureContainer= (props) =>{
    return(
            <div>
                <Card className="border rounded mb-2">
                    <CardHeader className="border rounded">
                        <p>
                        <strong>Hey,</strong><br/>
                        This is the preview of your real signature.<br/>
                        Fill up your details and signature design in the column on the left.
                        </p>
                    </CardHeader>
                    <CardBody className="border border-light rounded p-0">
                            <div className="d-flex rounded p-2" style={{background:"#B7B3B7"}}>
                                <div className="pl-2 mr-auto text-white">New Message</div>
                                <div className="text-white">x</div>
                            </div>
                            <div className="mb-2 pl-2 pt-2 text-muted border-muted border-bottom">To:</div>
                            <div className="border-muted pl-2 mb-3 text-muted border-bottom">Subject:</div>
                            <p className='pl-2 font-italic'>Dear Mr. User</p>
                            <p className='pl-2 font-italic'>Thank you for taking the time to create your signature.<br/> I look forward to hearing from you!</p>
                            <p className='pl-2 font-italic'>Sincerely,<br/> Ron Fybish</p>
                            <ModalSignature list={props.list} /><br/>    
                    </CardBody>
                </Card>
                    <ModalDisplay  list={props.list}  toggle={props.toggle} isOpen={props.isOpen}/>
            </div>
            )
}

export default SignatureContainer;

 {/* {
                                    props.isChange?
                                    <SignatureDisplay list={props.list}/>
                                    :
                                    <div>
                                        <img className="mt-3 mb-3" alt="signature-example-img" style={{maxWidth:"280px"}} src={require('../../img/‏‏ll.JPG')}/>
                                    </div>
                                        
                                } */}



                                {/* <div className="border d-flex flex-column rounded">
                            <div className="d-flex rounded p-2" style={{background:"#B7B3B7"}}>
                                <div className="pl-2 mr-auto text-white">New Message</div>
                                <div className="text-white">x</div>
                            </div>
                            <div className="mb-2 pl-2 pt-2 text-muted border-muted border-bottom">To:</div>
                            <div className="border-muted pl-2 text-muted border-bottom">Subject:</div>
                                        <p>Dear Mr. User</p>
                                        <p>Thank you for taking the time to create your signature.<br/> I look forward to hearing from you!</p>
                                        <p>Sincerely,<br/> Ron Fybish</p>
                        </div>   */}