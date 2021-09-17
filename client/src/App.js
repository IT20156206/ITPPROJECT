
import React,{ Component } from 'react';
//import axios from 'axios';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import addCustomer from './components/addCustomer';
import deleteCustomer from './components/deleteCustomer';
import editCustomer from './components/editCustomer';
import CustomerDetails from './components/CustomerDetails';
import search from './components/search';
import page from './components/page';
import NavBar from './components/NavBar';


export default class App extends Component{
  
  render(){
    return(
      <BrowserRouter>
      
      <div className ="container">
         <NavBar/>
          
         <Route path ="/" exact component={search}></Route>
         <Route path ="/home" exact component={Home}></Route>
         <Route path="/add" component ={addCustomer}></Route>
         <Route path ="/delete" component={deleteCustomer}></Route>
         <Route path = "/edit/:id" component={editCustomer}></Route>
         <Route path = "/customer/:id" component={CustomerDetails}></Route>
         <Route path ="/ss" exact component={page}></Route>
        
       
      </div>
      </BrowserRouter>
    )
  }
}

