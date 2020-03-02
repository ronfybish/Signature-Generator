import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input,  } from 'reactstrap';


const AppModal= props =>(
    <div className="text-center">
        <Button style={{background:"#8214B6"}} className="px-5 rounded-pill" onClick={props.toggle}>Generate Signature</Button>
            <Modal isOpen={props.isOpen} toggle={props.toggle} >
                <ModalHeader toggle={props.toggle} >Modal title</ModalHeader>
                    <ModalBody>
                            <Input type="textarea" placeholder="Write something...." rows={5} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" >Do Something</Button>{' '}
                        <Button color="secondary" onClick={props.toggle}>Cancel</Button>
                    </ModalFooter>
            </Modal>                   
    </div>
)

export default AppModal;