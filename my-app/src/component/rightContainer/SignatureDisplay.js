import React  from 'react'
import { Row,Col, } from 'reactstrap';

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
                    <Row inline="true" style={{background:"#8214B6"}} className="text-white rounded p-2">
                        <div className="mr-auto ">New Message</div>
                        <div className="">X</div>
                    </Row>
                    <Row className="text-muted my-4">
                        <Col>
                            <div className="mb-2 border-muted border-bottom">To</div>
                            <div className="border-muted border-bottom">Subject</div>
                        </Col>
                    </Row>

                    <Row style={mainStyle} className="py-3 align-items-center"> 
                        <Col xl="3"  xs="4" className="align-self-center mx-auto" > 
                            
                            {
                                logo.userInput.length>0?
                                <div className="mx-auto"><img  alt="img-logo" style={logoStyle} src={logo.userInput}/></div>
                                :
                                null                                       
                            }
                            <div className="d-flex justify-content-between">
                            {
                                social.map((el,index)=>{
                                    if(el.userInput.length>0)
                                    return  <a key={index} target="_blank"  rel="noopener noreferrer"  href={el.userInput}><img style={socialStyle} alt="img-social"  src={require(`../../img/`+`${el.icon}`)}/></a>
                                    else return null;
                                })
                            }
                            </div>
                        
                        </Col>
                        <Col xs="8" xl="9" lg="8" style={{borderLeftColor:style[1].userInput,borderLeftStyle:'solid'}} >
                                {
                                        profile.userInput.length>0?
                                        
                                           <img alt="img" style={profileStyle} src={profile.userInput}/>
                                        
                                        :
                                        null
                                }
                                {
                                    content.map((el,index)=>{
                                    if(el.length===0)return null;
                                    return <div style={contentStyle} key={index}>{el.userInput}</div>
                                    })
                                }                           
                        </Col>


                    </Row>
                </div>
        )
    }
    
    export default SignatureDisplay;
  
