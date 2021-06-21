 import React, {Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Layout from './hoc/layout/Layout'
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Checkout from './container/Checkout/Checkout';
import {Route, Switch} from 'react-router-dom'
import Orders from './container/Orders/Orders';



const particle = { 
  Particles:{
    number :{
      value: 30,
      density :{
        enable : true,
        
      value_area: 800
      }
    }
  }}
  




class App extends Component {

  
  render(){
    
 
     
  
    
   

    
  return (

    <div className= 'App' >
    
    <Particles 
    params= {particle}
    className= 'particle'/>
    
  
    <Layout>
    <Switch>
    <Route path= "/checkout" component={Checkout}/>
    <Route path= "/orders" component={Orders}/>
    <Route path= "/"  exact component={BurgerBuilder}/>

    
    </Switch>

    
    </Layout>
  
      </div>

  
  );
}
}
export default App;
