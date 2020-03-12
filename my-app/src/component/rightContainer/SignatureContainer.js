import React from 'react';
import ModalDisplay from './ModalDisplay'
import SignatureDisplay from './SignatureDisplay'
import { Card, CardBody} from 'reactstrap';

const SignatureContainer= (props) =>{
    return(
            <div>
                <Card className="border rounded mb-2 ">
                    <CardBody className=" rounded p-0">
                            <div className="d-flex rounded p-2" style={{background:"#404040"}}>
                                <div className="pl-2 mr-auto text-white"><strong>New Message</strong></div>
                                <div className="text-white">x</div>
                            </div>
                            <div className="mb-2 pl-2 pt-2 text-muted border-muted border-bottom">To:</div>
                            <div className="border-muted pt-1 pl-2 mb-3 text-muted border-bottom">Subject:</div>
                            <p className='px-2 font-italic mt-4'>Dear Mr. User</p>
                            <p className='px-2 font-italic'><strong>This is the preview of your real signature.</strong><br/>
                            Fill up your details and signature design in the column on the left.</p>
                            <p className='px-2 font-italic mb-3'>Best Regards,<br/> Ron Fybish</p>
                            {
                            props.isChange?
                                <div className="px-2"><SignatureDisplay list={props.list} /><br/></div>
                                :
                                <div className='d-inline-flex p-3 m-2 mb-3' style={{color:"#8214B6",border:"1px solid",borderRadius:"8px"}}>
                                    <div className="d-flex flex-column mr-2 ">
                                        <div className="mb-2 ml-1"><img alt="signature-example" src={require('../../img/signature.png')}/></div>
                                        <div>
                                            <a href='https://www.facebook.com/fybish'><img alt='icon-facebook' src={require('./../../img/facebook.png')}/></a>
                                            <a href='https://www.instagram.com/ron_fybish/' className="mx-1 "><img cd mbnpm start alt='icon-instagram' src={require('./../../img/instagram.png')}/></a>
                                            <a href='https://www.linkedin.com/in/ron-fybish-9b0194157/'><img alt='icon-linkedin' src={require('./../../img/linkedin.png')}/></a>
                                        </div>
                                    </div>
                                    <div className="pl-3" style={{borderLeft:"2px solid",borderColor:"#8214B6"}}>
                                        <div>Ron Fybish</div>
                                        <div>Full Stack Developer</div>
                                        <div>Owner <a href="www.just-sign.com">www.just-sign.com</a></div>
                                        <div><a href="gmail.com">fybishron@gmail.com</a></div>
                                    </div>
                                </div>
                            }
                    </CardBody>
                </Card>
                    <ModalDisplay list={props.list} isChange={props.isChange}   toggle={props.toggle} isOpen={props.isOpen}/>
            </div>
    )
}

export default SignatureContainer;

