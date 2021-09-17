import React,{ Component } from 'react';
import { Link } from 'react-router-dom';



export default class App extends Component{
  
  render(){
    return(
     
      
      <div>
       
         <br></br>
         <center>
        
         <img src={process.env.PUBLIC_URL +"/add.png"} widthe="500" alt="Logo" />;
         <img src={process.env.PUBLIC_URL +"/search.png"} widthe="500" alt="Logo" />;
         <img src={process.env.PUBLIC_URL +"/update.png"} widthe="500" alt="Logo" />;
         <img src={process.env.PUBLIC_URL +"/message.png"} widthe="500" alt="Logo" />;
         <img src={process.env.PUBLIC_URL +"/repo.png"} widthe="500" alt="Logo" />;
         </center>
         
         &nbsp;&nbsp;&nbsp;&nbsp;<Link to ="/add">ADD                   </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Link to ="/home">Edit                   </Link> &nbsp;&nbsp;&nbsp;
         
        <Link to ="/delete">delete                </Link>&nbsp;&nbsp;&nbsp;
       
        
      </div>
    
    )
  }
}
