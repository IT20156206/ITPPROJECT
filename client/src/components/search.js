
import React,{ Component } from 'react';
import axios from 'axios';




export default class Home extends Component{
  constructor(props){
     super(props);
    this.state={
      customers:[]
    };
  }
  componentDidMount(){
     this.retrievePhones();

  }
  retrievePhones(){
    axios.get("/phone/ret").then(res =>{
        if(res.data.success){
          this.setState({
            customers:res.data.existingPhones
          });
            console.log(this.state.customers);
        }
    });
  }
  render(){
    return(
      <div className ="container">
         <p> Telephone Numbers </p>
        
          <table className = "table">
            <thead>
              
              <tr> 
                <th scope = "col"># </th>
                <th scope = "col">PID</th>
                <th scope = "col">PhoneNumber</th>
                <th scope = "col">BID</th>
                <th scope = "col">SID </th>
                <th scope = "col">month</th>
                <th scope = "col">Date</th>
                <th scope = "col">action </th>

              </tr>
            </thead>
            <tbody>
              {this.state.customers.map((customers,index) =>(
                <tr>
                  <th scope = "row"> {index +1}</th>
                  <td>
                      <a href ={`/phone/${customers._id}`}  style ={{textDecoration:'none'}}>
                      
                      {customers.PID}
                      </a>
                      </td>
                  <td>{customers.PhoneNumber}</td>
                  <td>{customers.BID}</td>
                  <td>{customers.SID}</td>
                  <td>{customers.month}</td>
                  <td>{customers.Date}</td>
                  <td>
                    <a className = "btn btn-warning" href ="#">
                      <i className ="fas fa-edit"></i> &nbsp;update
                    </a>
                    &nbsp;
                     <a className = "btn btn-danger" href ="#">
                       <i className ="far fa-trash-alt"></i> &nbsp;Delete
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

