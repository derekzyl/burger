import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../Ui/Button/Button'
import './CheckoutSummary.css'

const checkoutSummary =(props)=>{
    return(
        <div className='CheckoutSummary'>  
        <h1> We hope you like it
        </h1>
        <div style={{width:'100%', margin:'auto' }}>
        <Burger ingredients={props.ingredients} />
        </div>
        <Button 
        clicked={props.onCheckoutCancelled}
        btnType='Danger'>CANCEL</Button>
        <Button 
        clicked ={props.onCheckoutContinued}
        btnType='Success'>CONTINUE</Button>

        </div>
      
    )
}
export default checkoutSummary;
