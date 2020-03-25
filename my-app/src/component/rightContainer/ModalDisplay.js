import React, { Component } from 'react'
// import ModalSignature from './ModalSignature'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Alert, } from 'reactstrap';
import SignatureDisplay from  './SignatureDisplay'
import {Link} from 'react-router-dom'

class ModalDisplay extends Component {
    constructor(props){
        super(props)

        this.state={
            isCopied: false,
        }
    }
    handleIsCopied=()=>{
        this.setState({isCopied:true})
    }
    handleCopy = event => {
        const copyBoxElement =this.copyBoxRef.current;
        copyBoxElement.contentEditable = true;
        copyBoxElement.focus();
        document.execCommand('selectAll');
        document.execCommand('copy');
        // console.log(document.execCommand('paste'));
        copyBoxElement.contentEditable = false;
        this.handleIsCopied();
        getSelection().empty();
        };

    copyBoxRef = React.createRef();
    render(){
        return(
            <div>
                <Button style={{background:"#8214B6"}} className="mb-5 mt-2 btn-block rounded-pill" onClick={this.props.toggle}>Generate Signature</Button>
                    <Modal  isOpen={this.props.isOpen} toggle={this.props.toggle} >
                    <ModalHeader toggle={this.props.toggle} className="p-2 m-0 ml-2" ><img alt="modal-logo" src={require('./../../img/modal_logo.png')}/></ModalHeader>
                            {this.state.isCopied?
                                    <Alert color="success">
                                    <h4 className="alert-heading">Copied !</h4>
                                    <p >all that’s left is to embed it in your email !</p>
                                    <hr />
                                    <Link to="/guide"><Button className="rounded-pill ml-3">How To Add Signature To Email ?</Button></Link>
                                </Alert>
                                :
                                null
                            }
                        <ModalBody className="mx-auto">
                            {
                                this.props.isChange?
                                <div className="copyBox" ref={this.copyBoxRef}>
                                    <SignatureDisplay list={this.props.list} />
                                </div>
                                :
                                <Alert color="danger">
                                <h5 className="alert-heading clearfix text-center">To See your signature preview<br/>Start Editing Your Details!</h5>
                                <ul>
                                    <li>Edit your details,</li>
                                    <li>Upload logo And profile Image,</li>
                                    <li>Add Design and style as you want</li>
                                </ul><hr />
                                <p className="mb-0">Good luck :)</p>
                                </Alert>
                            }

                        </ModalBody>
                        <ModalFooter >
                            {
                            this.props.isChange?
                            <div className='mx-auto'>
                                <Button className="rounded-pill pl-5 pr-5" style={{background:"#8214B6"}} onClick={(event)=>this.handleCopy(event)}>Copy Signature</Button>{' '}
                            </div>
                            :
                            <div className='mx-auto'>
                                <Button className="rounded-pill pl-5 pr-5" style={{background:"#8214B6"}} onClick={this.props.toggle} >Start Edit</Button>
                            </div>

                        }
                        </ModalFooter>
                    </Modal>                   
            </div>
        )

 }    
}

export default ModalDisplay;

