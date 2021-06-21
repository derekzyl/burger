import React, {Component} from 'react';
import CheckoutSummary from '../../component/Order/Checkout/CheckoutSummary';
import {Route} from 'react-router-dom'
import ContactData from './ContactData/ContactData';
  
class Checkout extends Component {
    state={
        ingredients:null,
        price:0,}

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search)
        const ingredients ={};
        let price= 0;
        for (let params of query.entries()){
            if(params[0] === 'price'){
                price =params[1]
            }
            else{
                ingredients[params[0]] = + params[1]

            }
        }
        this.setState({ingredients:ingredients, totalPrice:price})
    }
    CheckoutCancelledHandler =()=>{
        this.props.history.goBack();
    }

    CheckoutContinuedHandler=()=>{
        this.props.history.replace("/checkout/contact-data")
    }
        render() {
        return (
             <div>
             <CheckoutSummary ingredients={this.state.ingredients}
             onCheckoutCancelled ={this.CheckoutCancelledHandler}
             onCheckoutContinued={ this.CheckoutContinuedHandler} />


             <Route path={this.props.match.path + '/contact-data'} 
              render={(props)=>(<ContactData ingredients={this.state.ingredients}
                price={this.state.totalPrice} {...props}/>)}/>
             
             </div>
        );
    }
} 
export default Checkout 