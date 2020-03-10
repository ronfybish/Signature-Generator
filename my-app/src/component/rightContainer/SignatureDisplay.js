import React  from 'react'
import { Row,Col, } from 'reactstrap';

const SignatureDisplay = (props)=>  {

    const {content,social,images,style}=props.list;
    const logo=images[0];
    const profile=images[1]

    const mainStyle={
        border:"1px solid",
        background:style[0].userInput,
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
                <div className="mt-5">
                    <Row style={mainStyle} className="py-3 align-items-center"> 
                        <Col lg="3" xs="4"  className="align-self-center"> 
                            {
                                logo.userInput.length>0?
                                <div className="ml-3"style={{marginBottom:"4px"}} ><img  alt="img-logo" style={logoStyle} src={logo.userInput}/></div>
                                :
                                null                                       
                            }
                            <div className="d-flex justify-content-center">
                            {
                                social.map((el,index)=>{
                                    if(el.userInput.length>0)
                                    return  <a key={index} target="_blank"  rel="noopener noreferrer" className="mr-1 " href={el.userInput}><img style={socialStyle} alt="img-social"  src={el.icon}/></a>
                                    else return null;
                                })
                            }
                            </div>
                        </Col>
                        <Col xs="8" lg="9" style={{borderLeftColor:style[1].userInput,borderLeftStyle:'solid'}} >
                                {
                                    profile.userInput.length>0?
                                    <img className="py-1" alt="img" style={profileStyle} src={profile.userInput}/>
                                    :
                                    null
                                }
                                {
                                    content.filter(el=>el.length!==0).map((el,index)=>{
                                    return <div style={contentStyle} key={index}>{el.userInput}</div>
                                    })
                                }                           
                        </Col>
                    </Row>
                </div>
        )
    }
    
    export default SignatureDisplay;
  
