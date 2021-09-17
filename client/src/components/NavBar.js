
import React,{ Component } from 'react';





export default class NavBar extends Component{
  
  render(){
      return(
    <nav class="navbar navbar-light bg-light">
  <form class="form-inline">

  <a href={`/home`}>
  <button type="button" className="btn btn-success">Admin Panel</button></a>&nbsp; &nbsp; &nbsp; &nbsp;

  <a href={`/add`}>
  <button type="button" className="btn btn-success">Registration</button></a>&nbsp; &nbsp; &nbsp; &nbsp;



  



    {/* <button class="btn btn-outline-success" type="button">Add Telephones </button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Edit Telephones Numbers</button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button> */}

  </form>
      
</nav>
)
     
  }
}
