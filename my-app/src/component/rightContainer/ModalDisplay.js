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
        copyBoxElement.contentEditable = false;
        getSelection().empty();
        this.handleIsCopied();
        };

    copyBoxRef = React.createRef();
    render(){
        return(
            <div>
                <Button style={{background:"#8214B6"}} className="mb-5 mt-2 btn-block rounded-pill" onClick={this.props.toggle}>Generate Signature</Button>
                    <Modal  isOpen={this.props.isOpen} toggle={this.props.toggle} >
                    <ModalHeader toggle={this.props.toggle} className="p-2 m-0 ml-2" ><img src={require('./../../img/modal_logo.png')}/></ModalHeader>
                            {this.state.isCopied?
                                    <Alert color="success">
                                    <h4 className="alert-heading">Copied !</h4>
                                    <p >all that’s left is to embed it in your email !</p>
                                    <hr />
                                    <Link to="/guide"><Button className="rounded-pill"  >How do I add my new email signature ?</Button></Link>
                                </Alert>
                                :
                                null
                            }
                        <ModalBody className="mx-auto ">
                            <div className="copyBox" ref={this.copyBoxRef}>
                                <SignatureDisplay list={this.props.list} />
                            </div>
                        </ModalBody>
                        <ModalFooter >
                            <Button className="rounded-pill mx-auto px-5" onClick={(event)=>this.handleCopy(event)}>Copy Signature</Button>{' '}
                        </ModalFooter>
                    </Modal>                   
            </div>
        )

 }    
}

export default ModalDisplay;

