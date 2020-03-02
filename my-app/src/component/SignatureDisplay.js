import React  from 'react'
import { Row,Col } from 'reactstrap';

const SignatureDisplay = (props)=>  {

    const {content,social,images,style}=props.list;
    const logo=images[0];
    const profile=images[1]
    const mainStyle={
        backgroundColor:style[0].userInput,
        color:style[1].userInput,
        borderRadius:style[2].userInput+"px",
    }
    const contentStyle={
        paddingTop:style[3].userInput+"px",
    }
    const logoStyle={
        width:style[4].userInput+"px",
        height:style[4].userInput+"px",
        borderRadius:style[5].userInput+"px"
    }
    const profileStyle={
        width:style[6].userInput+"px",
        height:style[6].userInput+"px",
        borderRadius:style[7].userInput+"px",
    }
    const socialStyle={
        width:style[8].userInput+"px",
        height:style[8].userInput+"px",
        borderRadius:style[9].userInput+"px"
    };
        return (
                <div className="mt-4 ">
                    <Row inline style={{background:"#8214B6"}} className="text-white rounded p-2">
                        <div className="mr-auto ">New Message</div>
                        <div className="">X</div>
                    </Row>
                    <Row className="text-muted my-4">
                        <Col>
                            <div className="mb-2 border-muted border-bottom">To</div>
                            <div className="border-muted border-bottom">Subject</div>
                        </Col>
                    </Row>
                    <Row style={mainStyle} className="py-3"> 
                        <Col md="3" xs="4" >   
                               <Row>
                                   <Col >
                                        {
                                            logo.userInput.length>0?
                                                        <div><img  alt="img" style={logoStyle} src={logo.userInput}/></div>
                                                :
                                                null                                       
                                        }
                                        <div>
                                            {
                                                social.map(el=>{
                                                if(el.userInput.length>0)
                                                    return  <a target="_blank" className="mr-1" rel="noopener noreferrer"  href={el.userInput}><img style={socialStyle} alt="img-social" src={require(`${el.icon}`)}/></a>
                                                    else return null;
                                                })
                                            }
                                        </div>
                                   </Col>
                               </Row>    
                                
                        </Col>
                        <Col lg="9" xs="8" className="border-left border-dark">
                            <Row >
                                {
                                    profile.userInput.length>0?
                                    <Col className="align-self-center" lg="2" xs="4" >
                                        <div><img alt="img" style={profileStyle} src={profile.userInput}/></div>
                                    </Col>
                                    :
                                    null
                                }
                                <Col lg="10" xs="8">
                                    <div>
                                        {
                                            content.map((el,index)=>{
                                            if(el.length===0)return null;
                                            return <div style={contentStyle} key={index}>{el.userInput}</div>
                                            })
                                        }
                                    </div>
                                </Col>
                            </Row> 
                        </Col>
                        <img src={require('../img/toolbar.JPG')}/>
                    </Row>
                </div>
        )
    }

    export default SignatureDisplay;

    {/* <img src={require('../img/toolbar.JPG')} className="pt-5"/> */}