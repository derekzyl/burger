import React, { Component } from 'react';
import Aux from '../../../../hoc/Aux';
import Button from '../../../Ui/Button/Button';



class orderSummary  extends Component {
componentWillUpdate =()=>{

}

    render() {
const ingredientSummary = Object.keys(this.props.ingredients)
.map(igKey =>{ 
        return (
            <li key={igKey}>
            <span style={{textTransform :'capitalize'}}> {igKey}</span>
            :{this.props.ingredients[igKey]} ;
             </li>)
    } 
);
    return (
        <Aux>
        <h3> your order</h3>
        <p>burger with the following ingredients:</p>
        <ul>
       {ingredientSummary}
        </ul>
        <p><strong>Total Price:{this.props.price }</strong> </p>
        <p>continue to checkout?</p>
        <Button btnType= "Danger" clicked={this.props.purchaseCancelled} >CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseSuccess}>CONTINUE</Button>
        
        </Aux>
    )
}
}
export default orderSummary;