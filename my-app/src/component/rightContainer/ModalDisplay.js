import React from 'react';
// import ModalSignature from './ModalSignature'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Alert } from 'reactstrap';
import {Link} from 'react-router-dom'
import ModalSignature from './ModalSignature'

const ModalDisplay= props =>(
    <div>
        <Button style={{background:"#8214B6"}} className="mb-5 mt-2 btn-block rounded-pill" onClick={props.toggle}>Create Signature</Button>
            <Modal  isOpen={props.isOpen} toggle={props.toggle} >
                <ModalHeader  toggle={props.toggle} ><img src={require('../../img/logo.png')}/></ModalHeader>
                    <ModalBody>
                        <Alert className="m-0" style={{backgroundColor:"#8214B6",opacity:"0.8",color:"black"}} >
                            <h4  className="alert-heading">Well done!</h4>
                            <hr />
                            <p className="mb-0"><strong>1.</strong> Click on the White Box At the bottom</p>
                            <p className="mb-0"><strong>2.</strong> Select All <strong>(CTRL+A)</strong></p>
                            <p className="mb-0"><strong>3.</strong> Copy your signature <strong>(Ctrl+V or Command+V)</strong></p>
                            <div style={{background:"white",outlineStyle:"dotted",outlineWidth:"4px",}} className="my-3 pb-2 pl-2" contentEditable={true}>
                                <br/>
                                <br/>
                                <ModalSignature list={props.list} />
                            </div>
                        </Alert>
                    </ModalBody>
                    <ModalFooter  >
                        <Link className="mx-auto px-5" to="/guide"><Button  onClick={props.toggle}  style={{backgroundColor:"#8214B6"}}>How do I add my new email signature?</Button></Link>
                    </ModalFooter>
            </Modal>                   
    </div>
)

export default ModalDisplay;