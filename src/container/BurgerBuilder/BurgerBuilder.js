import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../component/Burger/Burger';
import BuildControls from '../../component/Burger/BuildControls/BuildControls';
import Modal from '../../component/Ui/Modal/Modal';
import OrderSummary from '../../component/Burger/BuildControls/Orderummary/OrderSummary';
import axios from '../../AxiosOrder';
import Spinner from '../../component/Ui/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
// import axios from 'axios';




const INGREDIENT_PRICES ={
  bacon:50,
  cheese :20,
  meat :100,
  salad : 50,
}

class burgerBuilder extends Component{ 
  state={
    ingredients:null,
    
     
    totalPrice:4,
    purchaseable: false,
    purchasing :false,
    loading:false,
    error:false,
  }




  componentDidMount () {
    axios.get('/ingredients.json')
    .then( response =>{
      this.setState({ingredients: response.data})
    })
    .catch(error =>{
      this.setState({error:true})
    })
  }

updatePurchaseState (ingredients){
  const sum = Object.keys(ingredients)
  .map(igKey =>{
    return ingredients[igKey]
  })
  .reduce((sum, el) => {
    return sum + el;
  },0)
  this.setState({purchaseable:sum>0})
}



  addIngredientHandler =(type)=>{
    const oldCount=this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients

    }
    updatedIngredients[type] = updatedCount;
    const priceAddition= INGREDIENT_PRICES[type];
    const oldPrice =this.state.totalPrice;
    const newPrice= oldPrice + priceAddition;
    this.setState({totalPrice : newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  };




  removeIngredienntHandler=(type)=>{
    const oldCount=this.state.ingredients[type];
    if (oldCount<= 0){return;}
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
 
    }
    updatedIngredients[type] = updatedCount;
    const priceDeduction= INGREDIENT_PRICES[type];
    const oldPrice =this.state.totalPrice;
    const newPrice= oldPrice - priceDeduction;
    this.setState({totalPrice : newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }


  purchaseHandler = () =>{
    this.setState ({purchasing :true})
  } ;



  purchaseCancelHandler=()=>{
    
    this.setState({purchasing :false})
  };

  purchaseContinueHandler=()=>{
    
    const queryParams =[];
    for (let i in this.state.ingredients){
      queryParams.push(encodeURIComponent(i) + '='+ encodeURIComponent(this.state.ingredients[i]))
    }
    queryParams.push('price=' + this.state.totalPrice)
  const queryString = queryParams.join('&')
    this.props.history.push({
      pathname:'/checkout',
      search:'?'+ queryString

    })
  } 
    render() {

      const disabledInfo={ ...this.state.ingredients};
      for ( let key in disabledInfo){
        disabledInfo[key]= disabledInfo[key] <=0
      }; 

      let orderSummary = null;
  

      if(this.state.loading){
        orderSummary= <Spinner/>
      }
let burger = this.state.error ? <p className=' grow gold f2 pa0-l fw5' >ingredients cant load</p>: <Spinner/>
if (this.state.ingredients){
  burger =(
  <Aux>
<Burger ingredients={this.state.ingredients}/> 

<BuildControls
ingredientAdded ={this.addIngredientHandler}
ingredientRemoved={this.removeIngredienntHandler}
disabled ={disabledInfo}
purchaseable ={this.state.purchaseable}
ordered= {this.purchaseHandler}
price ={this.state.totalPrice}/>
</Aux>) 


orderSummary = 
<OrderSummary ingredients ={this.state.ingredients} 
purchaseCancelled ={this.purchaseCancelHandler}
purchaseSuccess ={this.purchaseContinueHandler}
price={this.state.totalPrice}/>
};

if ( this.state.loading){
  orderSummary =< Spinner/>
}

        return( 
         
          <Aux>

          <Modal show ={this.state.purchasing}  modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
          </Modal >
{burger}
          </Aux>
        )
    }

}
export default   withErrorHandler(burgerBuilder, axios);
