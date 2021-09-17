import React,{ Component } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()



export default class Home extends Component{
  constructor(props){
     super(props);
    this.state={
      customers:[]
    };
  }
  componentDidMount(){
     this.retrieveCustomers();

  }
  retrieveCustomers(){
    axios.get("/customers").then(res =>{
        if(res.data.success){
          this.setState({
            customers:res.data.existingCustomers
          });
            console.log(this.state.customers);
        }
    });
  }

  onDelete = (id) =>{
    axios.delete(`/customer/delete/${id}`).then((res) =>{
        // alert("Delete Successfully");
        toast.error('Delete Successfuly',{position:toast.POSITION.TOP_CENTER})

        this.retrieveCustomers();
    })
  }



  render(){
    return(
      <div className ="container">
        <br/>
         <h1 className = "display-2"> Deleting Customers </h1>
          <br/><br/>
          <table className = "table table-striped table-dark table-responsive table-hover"> 
            <thead>
              
              <tr> 
                <th scope = "col"># </th>
                <th scope = "col"> </th>
                <th scope = "col">FirstName </th>
                <th scope = "col">LastName </th>
                <th scope = "col">Address </th>
                <th scope = "col">Email </th>
                <th scope = "col">Password </th>
                <th scope = "col">Action </th>

              </tr>
            </thead>
            <tbody>
              {this.state.customers.map((customers,index) =>(
                <tr>
                  <th scope = "row"> {index +1}</th>
                  <td>
                      
                  </td>
                  <td>{customers.FirstName}</td>
                  <td>{customers.LastName}</td>
                  <td>{customers.Address}</td>
                  <td>{customers.Email}</td>
                  <td>{customers.Password}</td>
                  <td>
                    <a className="btn btn-warning" href={`/edit/${customers._id}`}> 
                      <i className ="fas fa-edit"></i> &nbsp;update
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" href="/home" onClick={() =>this.onDelete(customers._id)}>
                                <i className="fa fa-trash"></i>&nbsp;Delete
                            </a>

                    </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className ="btn btn-success"><a href ="/add"style ={{textDecoration:'none',color:'white'}}> Add New customers</a>

          </button>
       
      </div>
    )
  }
}

