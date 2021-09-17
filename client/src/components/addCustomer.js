import React,{ Component } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


export default class addCustomer extends Component{
  constructor(props){
     super(props);
     this.state={
         FirstName:"",
         LastName:"",
         Address:"",
         Email:"",
         Password:""

     }
  }

  handleInputChange = (e) =>{      //frontend eke form eke change ekak wnewa nm handle ekaa change wela update wenwa 
       const{name,value} =e.target;

       this.setState({
         ...this.state,
          [name]:value
       })
      
  }

  onSubmit =(e) =>{
    e.preventDefault();

    const{FirstName, LastName, Address, Email, Password} = this.state;

    const data ={
         FirstName:FirstName,
         LastName:LastName,
         Address:Address,
         Email:Email,
         Password:Password
    }

      console.log(data)
      axios.post("/customer/add",data).then((res) =>{
        if(res.data.success){
          // alert("Added Successfully!")
          toast.success('Added Success',{position:toast.POSITION.TOP_CENTER})
           this.setState({
                FirstName:"",
                LastName:"",
                Address:"",
                Email:"",
                Password:""
           }
           )
          }
      });
     
  }

render() {
  return(
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal"> ADD CUSTOMERS</h1>
        <form className="needs-validation" noValidate>
           <div className="form-group"  style={{marginBottom:'15px'}}>

             <label style={{marginBottom:'5px'}}> First Name </label>
             <input type="text"
             className="form-control"
             name="FirstName"
             placeholder="Enter First Name"
             required
             value={this.state.FirstName}
             onChange={this.handleInputChange}/>
             </div>

            <div className="form-group" style={{marginBotton:'15px'}}>
                <label style={{marginBotton:'5px'}}>Last Name</label>
                <input type ="text"
                className="form-control"
                name="LastName"
                placeholder="Enter Last Name"
                required
                value={this.state.LastName}
                onChange={this.handleInputChange}/>
            </div>
            
            <div className="form-group" style={{marginBotton:'15px'}}>
                <label style={{marginBotton:'5px'}}>Address</label>
                <input type="text"
                className="form-control"
                name="Address"
                placeholder="Enter Address"
                required
                value={this.state.Address}
                onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBotton:'15px'}}>
                <label style={{marginBotton:'5px'}}>Email</label>
                <input type="email"
                className="form-control"
                name="Email"
                placeholder="Enter Email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                value={this.state.Email}
                onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBotton:'15px'}}>
                <label style={{marginBotton:'5px'}}>Password</label>
                <input type="text"
                className="form-control"
                name="Password"
                placeholder="Enter Password"
                required
                value={this.state.Password}
                onChange={this.handleInputChange}/>
            </div>
            
            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
             &nbsp; ADD CUSTOMER
            </button>
              
         </form>
         </div>
    
    )
  }
}

