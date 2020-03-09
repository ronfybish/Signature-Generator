import React from 'react'
const ModalSignature = (props)=>{const {content,social,images,style}=props.list;const logo=images[0];const profile=images[1];const mainStyle={backgroundColor:style[0].userInput,color:style[1].userInput,borderRadius:style[2].userInput+"px",fontSize:'16px',};const contentStyle={paddingTop:style[3].userInput+"px",marginLeft:"7px"};const logoStyle={width:style[4].userInput+"px",height:style[4].userInput+"px",borderRadius:style[5].userInput+"px",marginLeft:"4px",marginRight:"3px"};const profileStyle={width:style[6].userInput+"px",height:style[6].userInput+"px",borderRadius:style[7].userInput+"px",};const socialStyle={width:style[8].userInput+"px",height:style[8].userInput+"px",borderRadius:style[9].userInput+"px",marginLeft:"4px",marginRight:"3px"};return(<div style={mainStyle}><table><tr><td>{logo.userInput.length>0?<div><img alt="img-logo" style={logoStyle} src={logo.userInput}/></div>:null}{social.map((el,index)=>{if(el.userInput.length>0) return  <a key={index} target="_blank"  rel="noopener noreferrer" href={el.userInput}><img style={socialStyle} alt="img-social"  src={el.icon}/></a>;else return null;})}</td><td><div style={{borderLeftColor:style[1].userInput,borderLeftStyle:'solid',marginLeft:"4px",paddingLeft:"3px"}} >{profile.userInput.length>0?<div><img alt="img" style={profileStyle} src={profile.userInput}/></div>:null}{content.map((el,index)=>{if(el.length===0)return null;return <div style={contentStyle} key={index}>{el.userInput}</div>})}</div></td></tr></table></div>)}
export default ModalSignature


// const ModalSignature = (props)=>{
//     const {content,social,images,style}=props.list;
//     const logo=images[0];
//     const profile=images[1]

//     const mainStyle={
//         backgroundColor:style[0].userInput,
//         color:style[1].userInput,
//         borderRadius:style[2].userInput+"px",
//         fontSize:'16px',
        
//     }
//     const contentStyle={
//         paddingTop:style[3].userInput+"px",
//         marginLeft:"7px"
        
//     }
//     const logoStyle={
//         width:style[4].userInput+"px",
//         height:style[4].userInput+"px",
//         borderRadius:style[5].userInput+"px",
//         marginLeft:"4px",
//         marginRight:"3px"
//     }
//     const profileStyle={
//         width:style[6].userInput+"px",
//         height:style[6].userInput+"px",
//         borderRadius:style[7].userInput+"px",
        
//     }
//     const socialStyle={
//         width:style[8].userInput+"px",
//         height:style[8].userInput+"px",
//         borderRadius:style[9].userInput+"px",
//         marginLeft:"4px",
//         marginRight:"3px"
//     };

//     return(
//             <div style={mainStyle}>
//                 <table>
//                   <tr>
//                     <td>
//                         {
//                             logo.userInput.length>0?
//                             <div><img  alt="img-logo" style={logoStyle} src={logo.userInput}/></div>
//                             :
//                             null                                       
//                         }
//                         {
//                             social.map((el,index)=>{
//                                 if(el.userInput.length>0)
//                                 return  <a key={index} target="_blank"  rel="noopener noreferrer"  href={el.userInput}><img style={socialStyle} alt="img-social"  src={el.icon}/></a>
//                                 else return null;
//                             })
//                         }
//                         </td>
//                         <td >
//                             <div style={{borderLeftColor:style[1].userInput,borderLeftStyle:'solid',marginLeft:"4px",paddingLeft:"3px"}} >
//                                 {
//                                     profile.userInput.length>0?
                                    
//                                     <div><img alt="img" style={profileStyle} src={profile.userInput}/></div>
                                    
//                                     :
//                                     null
//                                 }
                
//                                 {
//                                 content.map((el,index)=>{
//                                 if(el.length===0)return null;
//                                 return <div style={contentStyle} key={index}>{el.userInput}</div>
//                                 })
//                                 }
//                             </div>
//                         </td>
//                     </tr>
//                 </table>
                 
//         </div>
//     )
// }