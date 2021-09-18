
import React,{ Component } from 'react';
//import axios from 'axios';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import addCustomer from './components/addCustomer';
import deleteCustomer from './components/deleteCustomer';
import editCustomer from './components/editCustomer';
import CustomerDetails from './components/CustomerDetails';

import Navigation from './components/Navigation';


export default class App extends Component{
  
  render(){
    return(
      <BrowserRouter>
      
      <div className ="container">
         <Navigation/>
          
         {/* <Route path ="/" exact component={search}></Route> */}
         <Route path ="/" exact component={Home}></Route>
         <Route path="/add" component ={addCustomer}></Route>
         <Route path ="/delete" component={deleteCustomer}></Route>
         <Route path = "/edit/:id" component={editCustomer}></Route>
         <Route path = "/customer/:id" component={CustomerDetails}></Route>
         
        
       
      </div>
      </BrowserRouter>
    )
  }
}

